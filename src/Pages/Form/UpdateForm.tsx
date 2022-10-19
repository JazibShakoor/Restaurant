import React, { Fragment, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../Ui/Card';
import classes from './Form.module.css';
import useFetchApi from '../../store/FetchApis';
import Navbar from '../../components/NavigationBar/Navbar';
import Donut from '../../Ui/donut';
import useUpdateApi from '../../store/UpdateApi';

const UpdateForm: React.FC = () => {
  const { id } = useParams();

  const idInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const discountInputRef = useRef<HTMLInputElement>(null);
  const { data, fetchedValue } = useFetchApi();
  const { UpdateData } = useUpdateApi();

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  if (!data) {
    <Donut />
  }

  const item = data && data.filter(dataId => dataId.id === id)

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    let _id = idInputRef.current!.value;
    let name = nameInputRef.current!.value;
    let image = imageInputRef.current!.value;
    let discount = discountInputRef.current!.value;

    const existingCartItemIndex = data?.findIndex(
      (item) => item.id === id
    );
    const existingCartItem = data[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        id: _id,
        name: name,
        image: image,
        discount: parseInt(discount)
      };

      data[existingCartItemIndex] = updatedItem;
    }
    UpdateData(data);
    alert('Successfully Update')
  };

  return (
    <Fragment>
      <Navbar />
      <h1 style={{textAlign: "center"}}>Update From</h1>
      <form onSubmit={formSubmitHandler} >
        <Card>
          {item.map(x => (<div className={classes['form-control']} key={x.id}>
            <label htmlFor="itemId">Id</label>
            <input type="text" id="itemId" defaultValue={x.id} ref={idInputRef} />
            <label htmlFor="itemname">Name</label>
            <input type="text" id="itemname" defaultValue={x.name} ref={nameInputRef} />
            <label htmlFor="itemimage">Image</label>
            <input type="text" id="itemimage" defaultValue={x.image} ref={imageInputRef} />
            <label htmlFor="itemdiscount">Discount</label>
            <input type="text" id="itemdiscount" defaultValue={x.discount} ref={discountInputRef} />
            <button type='submit' >Add</button>
          </div>))}
        </Card>
      </form>
    </Fragment>
  )
};

export default UpdateForm;
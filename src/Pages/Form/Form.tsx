import React, { Fragment, useEffect, useRef } from 'react';
import Card from '../../Ui/Card';
import classes from './Form.module.css';
import Navbar from '../../components/NavigationBar/Navbar';
import useFetchApi from '../../store/FetchApis';
import useUpdateApi from '../../store/UpdateApi';

const Form: React.FC = () => {
  const idInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const discountInputRef = useRef<HTMLInputElement>(null);
  const { data, fetchedValue } = useFetchApi();
  const { UpdateData } = useUpdateApi();

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    let id = idInputRef.current!.value;
    let name = nameInputRef.current!.value;
    let image = imageInputRef.current!.value;
    let discount = discountInputRef.current!.value;

    if (data){
      data.push({ id: id, name: name, image: image, discount: parseInt(discount) })
    }
    UpdateData(data);

    alert("Item added successfully")
  }  

  return (
    <Fragment>
      <Navbar />
      <h1 style={{textAlign: "center"}}>Add From</h1>
      <form onSubmit={formSubmitHandler}>
        <Card>
          <div className={classes['form-control']}>
            <label htmlFor="itemId">Id</label>
            <input type="text" id="itemId" ref={idInputRef} />
            <label htmlFor="itemname">Name</label>
            <input type="text" id="itemname" ref={nameInputRef} />
            <label htmlFor="itemimage">Image</label>
            <input type="text" id="itemimage" ref={imageInputRef} />
            <label htmlFor="itemdiscount">Discount</label>
            <input type="text" id="itemdiscount" ref={discountInputRef} />
            <button type='submit'>Add</button>
          </div>
        </Card>
      </form>
    </Fragment>
  )
};

export default Form;
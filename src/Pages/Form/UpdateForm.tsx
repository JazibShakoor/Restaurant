import React, { Fragment, useState } from 'react';
import {useParams} from 'react-router-dom';
import Card from '../../Ui/Card';
import classes from './Form.module.css';
import { FoodsItems } from '../MuneItem/MuneItem';
import Navbar from '../../components/NavigationBar/Navbar';

const UpdateForm: React.FC = () => {
    const { id } = useParams();
    const item = FoodsItems.filter(dataId => dataId.id === id)
    const [_id, setId] = useState(item[0].id);
    const [name, setName] = useState(item[0].name);
    const [image, setImage] = useState(item[0].image);
    const [discount, setDiscount] = useState(String(item[0].discount));

    const formSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const existingCartItemIndex = FoodsItems.findIndex(
            (item) => item.id === id
          );
          const existingCartItem = FoodsItems[existingCartItemIndex];

          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              id: _id,
              name: name,
              image: image,
              discount: parseInt(discount)
            };
        
            FoodsItems[existingCartItemIndex] = updatedItem;
        }
      
        const response = await fetch(
            "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/restaurant.json",
            {
              method: "PUT",
              body: JSON.stringify({
                user: FoodsItems,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
      
          await response.json();
    };

    return (
        <Fragment>
            <Navbar />
            <form onSubmit={formSubmitHandler} >
            <Card>
            {item.map(x => (<div className={classes['form-control']} key={x.id}>
              <label htmlFor="itemId">Id</label>
              <input type="text" id="itemId" defaultValue={x.id}  onChange={(e) => setId(e.target.value)} />
              <label htmlFor="itemname">Name</label>
              <input type="text" id="itemname"  defaultValue={x.name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="itemimage">Image</label>
              <input type="text" id="itemimage"  defaultValue={x.image} onChange={(e) => setImage(e.target.value)} />
              <label htmlFor="itemdiscount">Discount</label>
              <input type="text" id="itemdiscount" defaultValue={x.discount} onChange={(e) => setDiscount(e.target.value)} />
              <button type='submit' >Add</button>
            </div>) )}
            </Card>    
            </form>
        </Fragment>
    )
};

export default UpdateForm;
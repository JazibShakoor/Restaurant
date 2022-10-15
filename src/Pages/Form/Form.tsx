import React, { Fragment, useRef } from 'react';
import Card from '../../Ui/Card';
import classes from './Form.module.css';
import { FoodsItems } from '../MuneItem/MuneItem';
import Navbar from '../../components/NavigationBar/Navbar';

const Form: React.FC = () => {
    const idInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const discountInputRef = useRef<HTMLInputElement>(null);

    const formSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const Id = idInputRef.current!.value;
        const Name = nameInputRef.current!.value;
        const Image = imageInputRef.current!.value;
        const Discount = discountInputRef.current!.value;
 
        FoodsItems.push({id: Id, name: Name , image: Image, discount: parseInt(Discount) })
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
            <form onSubmit={formSubmitHandler}>
            <Card>
            <div className={classes['form-control']}>
              <label htmlFor="itemId">Id</label>
              <input type="text" id="itemId" ref={idInputRef} />
              <label htmlFor="itemname">Name</label>
              <input type="text" id="itemname" ref={nameInputRef}/>
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
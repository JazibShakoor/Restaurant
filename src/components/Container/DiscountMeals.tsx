import React from 'react';
import classes from '../../Pages/MuneItem/MuneItem.module.css';
import Card from '../../Ui/Card';

interface TodoListProps {
    Ditems: { id: string, name: string; image: string, discount?: number };
    onDeleteItem: (id: string) => void;
  }

const DiscountMeals: React.FC<TodoListProps> = (props) => {
    return (
        <div className={classes.Pack}>
        <Card> 
        <div className={classes.Sizing}>
           <img src={props.Ditems.image} alt=''></img>
           <h3>{props.Ditems.name}</h3>
           <h3>{`Discount: ${props.Ditems.discount}%`}</h3>
           <span>
            <button>Edit</button>
            <button onClick={props.onDeleteItem.bind(null, props.Ditems.id)}>Delete</button>
           </span>
        </div> 
        </Card>
      </div>
    );
};

export default DiscountMeals;
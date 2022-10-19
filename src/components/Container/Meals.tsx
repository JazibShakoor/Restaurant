import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../Pages/MuneItem/MuneItem.module.css';
import Card from '../../Ui/Card'

interface TodoListProps {
    items: { id: string, name: string; image: string, discount?: number };
    onDeleteItem: (id: string) => void;
  }

const Meals: React.FC<TodoListProps> = (props) => {

    return (
      <div className={classes.Pack}>
        <Card> 
        <div className={classes.Sizing}>
          <img src={props.items.image} alt=''></img>
          <h3>{props.items.name}</h3>
          <span>
            <Link to={`UpdateForm/${props.items.id}`}><button>Edit</button></Link>
            <button onClick={props.onDeleteItem.bind(null, props.items.id)}>Delete</button>
          </span>
        </div> 
        </Card>
      </div>
    )
};

export default Meals;
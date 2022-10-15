import React, { Fragment, useState } from 'react';
import Meals from '../../components/Container/Meals';
import DiscountMeals from '../../components/Container/DiscountMeals';
import Navbar from '../../components/NavigationBar/Navbar';
import classes from './MuneItem.module.css';

export const FoodsItems: { id: string, name: string, image: string, discount?: number}[] = [
{ id: 'A01', name: "Sushi", image: "https://byfood.b-cdn.net/api/public/assets/8185/salmon-nigiri-%20sushi?optimizer=image",},
{ id: 'A02', name: 'Okonamiyaki', image: 'https://byfood.b-cdn.net/api/public/assets/8168/okonomiyaki?optimizer=image', discount: 20},
{ id: 'A03', name: 'Miso Soup', image: 'https://byfood.b-cdn.net/api/public/assets/8186/miso%20soup?optimizer=image'},
{ id: 'A04', name: 'Yakitori ', image: 'https://byfood.b-cdn.net/api/public/assets/8169/yakitori?optimizer=image'},
{ id: 'A05', name: 'Udon', image: 'https://byfood.b-cdn.net/api/public/assets/8170/udon?optimizer=image', discount: 15}]

const MuneItem: React.FC = () => {
  const [At, setAt] = useState(FoodsItems.filter(item => !item.discount))
  const [Dt, setDt] = useState(FoodsItems.filter(item => item.discount))

  const itemDeleteHandler = (itemId: string) => {
    setAt(preItem => { return preItem.filter(item => item.id !== itemId && !item.discount)})
    setDt(preItem => { return preItem.filter(item => item.id !== itemId && item.discount)})
  };

    return (
        <Fragment>
            <Navbar />
            <h1 style={{textAlign: "center"}}>Traditional Japanses Food</h1>
            <div className={classes.Cover}>
              {At.map(x => (<Meals key={x.id} items={x} onDeleteItem={itemDeleteHandler} />))}
            </div>
            <h1 style={{textAlign: "center"}}>Discount Food Item</h1>
            <div className={classes.Cover}>
              {Dt.map(y => (<DiscountMeals key={y.id} Ditems={y} onDeleteItem={itemDeleteHandler} />))}
            </div>
        </Fragment>
    )
};

export default MuneItem;
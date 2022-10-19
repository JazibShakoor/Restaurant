import React, { Fragment, useEffect } from 'react';
import Meals from '../../components/Container/Meals';
import DiscountMeals from '../../components/Container/DiscountMeals';
import Navbar from '../../components/NavigationBar/Navbar';
import classes from './MuneItem.module.css';
import useFetchApi from '../../store/FetchApis';
import Donut from '../../Ui/donut';
import useUpdateApi from '../../store/UpdateApi';

const MuneItem: React.FC = () => {
  const { fetchedValue, data } = useFetchApi();
  const { UpdateData } = useUpdateApi();

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  const itemDeleteHandler = async (itemId: string) => {
    const deleteItem = data.filter(item => item.id !== itemId);

    UpdateData(deleteItem)

  };

  let WithOutDiscount = data && data.filter(y => !y.discount);
  let WithDiscount = data && data.filter(x => x.discount)


  return (
    <Fragment>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Traditional Japanses Food</h1>
      <div className={classes.Cover}>
        {data ? WithOutDiscount?.map(x => (<Meals key={x.id} items={x} onDeleteItem={itemDeleteHandler} />)) : <Donut />}
      </div>
      <h1 style={{ textAlign: "center" }}>Discount Food Item</h1>
      <div className={classes.Cover}>
        {data ? WithDiscount?.map(y => (<DiscountMeals key={y.id} Ditems={y} onDeleteItem={itemDeleteHandler} />)) : <Donut />}
      </div>
    </Fragment>
  )
};

export default MuneItem;
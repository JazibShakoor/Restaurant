import React, { Suspense, lazy, Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import UpdateForm from './Pages/Form/UpdateForm';
import Donut from './Ui/donut';

const MuneItem = lazy(() => import('./Pages/MuneItem/MuneItem'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Form = lazy(() => import('./Pages/Form/Form'));

const App: React.FC = () => {

  return (
    <Fragment>
      <Suspense fallback={<div><Donut /></div>}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/MuneItem' element={<MuneItem />}></Route>
          <Route path='/Form' element={<Form />}></Route>
          <Route path='MuneItem/UpdateForm/:id' element={<UpdateForm />}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;

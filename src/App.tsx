import React, { Suspense, lazy, Fragment, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UpdateForm from './Pages/Form/UpdateForm';
import Donut from './Ui/donut';

const MuneItem = lazy(() => import('./Pages/MuneItem/MuneItem'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Form = lazy(() => import('./Pages/Form/Form'));

const App: React.FC = () => {
  const RoutesComponents: {path: string, element: ReactElement}[] = [
    {path: '/', element: <Home />},
    {path: '/MuneItem', element: <MuneItem />},
    {path: '/Form', element: <Form />},
    {path: 'MuneItem/UpdateForm/:id', element: <UpdateForm />}
  ]

  return (
    <Fragment>
      <Suspense fallback={<div><Donut /></div>}>
        <Routes>
          {RoutesComponents.map((props) => 
          <Route path={props.path} element={props.element}></Route>)}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;

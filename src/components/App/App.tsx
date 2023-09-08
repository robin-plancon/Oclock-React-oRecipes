import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';
import Loading from './Loading';

import { fetchRecipes } from '../../store/reducers/recipes';

import './App.scss';
import Favorites from '../Favorites';

// interface AppProps {
//   loading?: boolean;
// }

function App() {
  const loading = useAppSelector((state) => state.recipes.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';

import Loading from './Loading';

import './App.scss';
import { useAppSelector } from '../../hooks/redux';

// interface AppProps {
//   loading?: boolean;
// }

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // const recipes = useAppSelector((state) => state.recipes);

  // useEffect(() => {
  //   if (recipes.list.length > 0) {
  //     setIsLoading(false);
  //   }
  // }, [recipes]);

  return (
    <div className="app">
      {/* {isLoading && <Loading />} */}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

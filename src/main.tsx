import { Provider } from 'react-redux';
// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';
// On importe le composant BrowserRouter qui nous permettra d'utiliser le routage
import { BrowserRouter } from 'react-router-dom';
// On importe notre composant principal
import App from './components/App/App';
// On importe notre fichier de style global
import './styles/index.scss';

import store from './store';
import { getRecipes } from './store/reducers/recipes';
import ScrollToTop from './helpers/ScrollToTop';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(getRecipes());

// On injecte notre application dans le DOM
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>
);

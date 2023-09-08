import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

import './styles.scss';

function AppHeader() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm />
    </header>
  );
}

export default AppHeader;

import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

import './styles.scss';

function AppHeader() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        handleLogin={() => {}}
        handleLogout={() => {}}
        isLogged={false}
        loggedMessage=""
      />
    </header>
  );
}

export default AppHeader;

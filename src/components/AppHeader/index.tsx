import logo from '../../assets/logo.png';

import './styles.scss';

function AppHeader() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
    </header>
  );
}

export default AppHeader;

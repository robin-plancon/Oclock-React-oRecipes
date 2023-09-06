import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { Recipe } from '../../@types/recipe';

import './styles.scss';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes);
  if (!recipes || !recipes.list) {
    return null;
  }
  return (
    <nav className="menu">
      <Link className="menu-link menu-link--active" to="/">
        Accueil
      </Link>
      {recipes.list.map((recipe: Recipe) => (
        <Link
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;

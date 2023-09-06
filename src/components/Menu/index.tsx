import { useAppSelector } from '../../hooks/redux';
import { Recipe } from '../../@types/recipe';

import './styles.scss';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes);
  return (
    <nav className="menu">
      <a className="menu-link menu-link--active" href="/">
        Accueil
      </a>
      {recipes.list.map((recipe: Recipe) => (
        <a
          key={recipe.id}
          className="menu-link"
          href={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </a>
      ))}
    </nav>
  );
}

export default Menu;

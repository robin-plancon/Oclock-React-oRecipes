import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

function Favorites() {
  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes recettes favorites"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={[]}
      />
    </Page>
  );
}

export default Favorites;

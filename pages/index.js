import React, { useState } from 'react';

import Recipe from '../components/Recipe';
import NewRecipe from '../components/NewRecipe/NewRecipe';
import Button from '../components/UI/Button';
import SearchBar from '../components/UI/SearchBar';
import NavBar from '../components/NavBar';
import MainContainer from '../components/UI/MainContainer';

const MOCK_RECIPES = [
  {
    id: 1,
    title: 'Härkis-makaronilaatikko',
    ingredients: [
      { name: 'Härkis', amount: '1', unit: 'pakkaus' },
      { name: 'Makaroni', amount: '400', unit: 'g' },
      { name: 'Kananmuna', amount: '1', unit: 'kpl' },
      { name: 'Kaurajuoma', amount: '5', unit: 'dl' },
      { name: 'Suola', amount: '2', unit: 'tl' },
      { name: 'Pippuri', amount: '1', unit: 'tl' },
      { name: 'Paprikajauhe', amount: '1', unit: 'tl' },
    ],
    steps: [
      'Keitä makaroni',
      'Sekoita kananmunat, kaurajuoma ja mausteet',
      'Sekoita kaikki uunivuokaan',
      'Paista 175c 45min',
    ],
    tags: ['Kasvis', 'Uuniruoka'],
  },
  {
    id: 2,
    title: 'Perunamuusi',
    ingredients: [
      { name: 'Peruna', amount: '1', unit: 'kg' },
      { name: 'Kaurajuoma', amount: '1', unit: 'dl' },
      { name: 'Margariini', amount: '2', unit: 'rkl' },
      { name: 'Suola', amount: '2', unit: 'tl' },
    ],
    steps: [
      'Keitä kuoritut perunat',
      'Muussaa ja lisää kaurajuoma sekä margariini',
    ],
    tags: ['Lisuke'],
  },
  {
    id: 3,
    title: 'Härkis-makaronilaatikko',
    ingredients: [
      { name: 'Härkis', amount: '1', unit: 'pakkaus' },
      { name: 'Makaroni', amount: '400', unit: 'g' },
      { name: 'Kananmuna', amount: '1', unit: 'kpl' },
      { name: 'Kaurajuoma', amount: '5', unit: 'dl' },
      { name: 'Suola', amount: '2', unit: 'tl' },
      { name: 'Pippuri', amount: '1', unit: 'tl' },
      { name: 'Paprikajauhe', amount: '1', unit: 'tl' },
    ],
    steps: [
      'Keitä makaroni',
      'Sekoita kananmunat, kaurajuoma ja mausteet',
      'Sekoita kaikki uunivuokaan',
      'Paista 175c 45min',
    ],
    tags: ['Kasvis', 'Uuniruoka'],
  },
  {
    id: 4,
    title: 'Kilju',
    ingredients: [
      { name: 'Sokeri', amount: '1', unit: 'pakkaus' },
      { name: 'Hiiva', amount: '400', unit: 'g' },
    ],
    steps: ['Ota huikka'],
    tags: ['Kasvis', 'Helppo', 'Herkku'],
  },
];

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [showNewRecipeModal, setShowNewRecipeModal] = useState(false);
  const [recipes, setRecipes] = useState(MOCK_RECIPES);

  const filteredRecipes = recipes.filter((recipe) => {
    if (recipe.title.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    }

    let tagFound = false;

    recipe.tags.forEach((tag) => {
      if (tag.toLowerCase().includes(searchInput.toLowerCase())) {
        tagFound = true;
      }
    });

    return tagFound;
  });

  const addRecipe = (recipe) => {
    const id = Math.ceil(100000 * Math.random());
    const newRecipe = { ...recipe, id };
    setRecipes((prev) => [...prev, newRecipe]);
  };

  if (showNewRecipeModal) {
    return (
      <NewRecipe
        setShowNewRecipeModal={setShowNewRecipeModal}
        addRecipe={addRecipe}
      />
    );
  }

  return (
    <MainContainer>
      <NavBar />

      <main className="container px-8 mb-auto min-h-full max-w-xl">
        <h2 className="text-3xl font-bold font-heading text-zinc-900 mb-8 text-center">
          Public recipes
        </h2>
        <div className="grid grid-cols-4 gap-4 max-w-xl w-full mb-8">
          <SearchBar onChange={setSearchInput} />
          <Button onClick={() => setShowNewRecipeModal(true)}>New</Button>
        </div>

        {filteredRecipes &&
          filteredRecipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        {filteredRecipes.length === 0 && (
          <p className="text-center">No recipes found.</p>
        )}
      </main>
      <footer className="w-full py-2 px-8 bg-zinc-900 text-zinc-400 align-middle text-center">
        <p className="text-sm">Made with coffee by Otto Takkinen</p>
      </footer>
    </MainContainer>
  );
};

export default Home;

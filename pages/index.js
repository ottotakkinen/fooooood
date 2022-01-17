import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Recipe from '../components/Recipe';

const MOCK_RECIPES = [
  {
    id: 1,
    title: 'Härkis-makaronilaatikko',
    ingredients: {
      main: [
        { name: 'Härkis', amount: '1', unit: 'pakkaus' },
        { name: 'Makaroni', amount: '400', unit: 'g' },
        { name: 'Kananmuna', amount: '1', unit: 'kpl' },
        { name: 'Kaurajuoma', amount: '5', unit: 'dl' },
      ],
      spices: [
        { name: 'Suola', amount: '2', unit: 'tl' },
        { name: 'Pippuri', amount: '1', unit: 'tl' },
        { name: 'Paprikajauhe', amount: '1', unit: 'tl' },
      ],
    },
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
    ingredients: {
      main: [
        { name: 'Peruna', amount: '1', unit: 'kg' },
        { name: 'Kaurajuoma', amount: '1', unit: 'dl' },
        { name: 'Margariini', amount: '2', unit: 'rkl' },
      ],
      spices: [{ name: 'Suola', amount: '2', unit: 'tl' }],
    },
    steps: [
      'Keitä kuoritut perunat',
      'Muussaa ja lisää kaurajuoma sekä margariini',
    ],
    tags: ['Lisuke'],
  },
  {
    id: 3,
    title: 'Härkis-makaronilaatikko',
    ingredients: {
      main: [
        { name: 'Härkis', amount: '1', unit: 'pakkaus' },
        { name: 'Makaroni', amount: '400', unit: 'g' },
        { name: 'Kananmuna', amount: '1', unit: 'kpl' },
        { name: 'Kaurajuoma', amount: '5', unit: 'dl' },
      ],
      spices: [
        { name: 'Suola', amount: '2', unit: 'tl' },
        { name: 'Pippuri', amount: '1', unit: 'tl' },
        { name: 'Paprikajauhe', amount: '1', unit: 'tl' },
      ],
    },
    steps: [
      'Keitä makaroni',
      'Sekoita kananmunat, kaurajuoma ja mausteet',
      'Sekoita kaikki uunivuokaan',
      'Paista 175c 45min',
    ],
    tags: ['Kasvis', 'Uuniruoka'],
  },
];

const Home = () => {
  const [searchInput, setSearchInput] = useState('');

  const filteredRecipes = MOCK_RECIPES.filter((recipe) => {
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

  return (
    <div className="font-body flex flex-col min-h-screen bg-zinc-100 text-slate-900 items-center">
      <nav className="grid gap-2 w-full grid-cols-4 text-center py-4 px-8 fixed bg-zinc-100">
        <a className="text-4xl font-extrabold font-heading col-span-4 p-4">
          Fooooood
        </a>

        <form className="w-full max-w-md relative text-slate-800 col-span-3">
          <input
            type="text"
            className="h-10 py-2 px-4 w-full  rounded-full shadow-md"
            placeholder="Search for recipe"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-0 right-0 h-10 px-4"
          >
            <SearchIcon />
          </button>
        </form>
        <button className="h-10 col-span-1 font-bold text-xl rounded-full bg-yellow-300 text-slate-900 shadow-md">
          New
        </button>
      </nav>
      <main className="container px-8 mt-40 mb-auto min-h-full max-w-xl">
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
    </div>
  );
};

export default Home;

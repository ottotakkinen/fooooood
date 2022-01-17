import React from 'react';

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
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-slate-100 items-center">
      <nav className="container flex justify-between items-center py-4 px-8  ">
        <a className="text-3xl font-bold">Fooooood</a>
        <a href="#">Login</a>
      </nav>
      <main className="container px-8 h-auto mb-auto">
        <form className="w-full relative text-black my-8">
          <input
            type="text"
            className="h-10 py-2 px-4 w-full rounded-full"
            placeholder="Search for recipe"
          />
          <button className="absolute top-0 right-0 h-10 px-4">
            <SearchIcon />
          </button>
        </form>
        {MOCK_RECIPES.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </main>
      <footer className="w-full px-8 bg-zinc-900 text-slate-400 align-middle text-center">
        <p className="text-sm">Made with coffee by Otto Takkinen</p>
      </footer>
    </div>
  );
};

export default Home;

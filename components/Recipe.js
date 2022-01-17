import React from 'react';

const Recipe = ({ recipe }) => {
  const { title, ingredients, steps, tags } = recipe;
  return (
    <article className="container bg-zinc-800 text-zinc-300 py-4 px-8 my-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-zinc-100 mb-4">{title}</h2>
      <h3 className="my-2">Main ingredients</h3>
      <div className="flex flex-wrap gap-2">
        {ingredients.main.map((i) => (
          <span
            key={i.name}
            className="font-semibold text-sm py-1 px-4 border-2 rounded-full"
          >
            {i.name}
          </span>
        ))}
      </div>
      <button className="w-full py-2 px-4 mt-8 font-bold uppercase bg-orange-700 rounded-full">
        Make
      </button>
    </article>
  );
};

export default Recipe;

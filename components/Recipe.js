import React from 'react';
import Button from './UI/Button';

const Recipe = ({ recipe }) => {
  const { title, ingredients, steps, tags } = recipe;
  return (
    <div className=" bg-zinc-50 text-zinc-600 p-8 mb-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold font-heading text-zinc-900 mb-4">
        {title}
      </h2>
      {/* <h3 className="my-2">Main ingredients</h3> */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags?.map((tag) => (
          <span key={tag} className="text-sm py-1 px-4 bg-zinc-200 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
      <Button variant="secondary">Show recipe</Button>
    </div>
  );
};

export default Recipe;

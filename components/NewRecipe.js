import React, { useState } from 'react';

const IngredientRow = () => (
  <div className="grid grid-cols-311 gap-4 w-full">
    <div className="">
      <input
        className="block w-full rounded-full py-1 px-3"
        type="text"
        name="ingredient"
        id="ingredient"
      />
    </div>
    <div className="">
      <input className="block w-full rounded-full py-1 px-3" type="number" />
    </div>
    <div className="">
      <input className="block w-full rounded-full py-1 px-3" type="text" />
    </div>
  </div>
);

const NewRecipe = ({ setShowNewRecipeModal }) => {
  const [mainRowCount, setRowCount] = useState(1);

  const mainRows = [];
  for (let i = 0; i < mainRowCount; i++) {
    mainRows.push(<IngredientRow key={i} />);
  }

  const incrementRowCount = (e) => {
    e.preventDefault();
    setRowCount((v) => v + 1);
  };

  return (
    <div className="font-body fixed w-full top-0 bottom-0 overflow-y-scroll bg-zinc-100 z-50 p-4 flex flex-col">
      <button onClick={() => setShowNewRecipeModal(false)}>back arrow</button>
      <h1 className="text-4xl font-extrabold font-heading py-4 mb-8">
        Add new recipe
      </h1>
      <form className="flex flex-col gap-4">
        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="block w-full rounded-full py-1 px-3"
          type="text"
          id="title"
        />
        <p className="font-bold" htmlFor="">
          Ingredients
        </p>
        <div className="grid grid-cols-311 gap-4 w-full">
          <div className="">
            <label htmlFor="ingredient">Ingredient</label>
          </div>
          <div className="">
            <label htmlFor="">Amount</label>
          </div>
          <div className="">
            <label htmlFor="">Unit</label>
          </div>
        </div>
        {mainRows}
        <button onClick={incrementRowCount}>add row</button>
      </form>
      <button className="h-10 mt-auto font-bold text-xl rounded-full bg-yellow-300 text-slate-900 shadow-md">
        Save
      </button>
    </div>
  );
};

export default NewRecipe;

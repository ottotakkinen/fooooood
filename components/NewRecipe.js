import { DataThresholdingOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

const IngredientRow = () => (
  <fieldset className="grid grid-cols-311 gap-4 w-full">
    <div className="">
      <input
        className="block w-full rounded-full py-1 px-3"
        type="text"
        name="ingredient"
        id="ingredient"
      />
    </div>
    <div className="">
      <input
        className="block w-full rounded-full py-1 px-3"
        type="number"
        name="amount"
        id="amount"
      />
    </div>
    <div className="">
      <input
        className="block w-full rounded-full py-1 px-3"
        type="text"
        name="unit"
        id="unit"
        autoCapitalize="false"
      />
    </div>
  </fieldset>
);

const NewRecipe = ({ setShowNewRecipeModal, addRecipe }) => {
  const [mainRowCount, setRowCount] = useState(1);

  const mainRows = [];
  for (let i = 0; i < mainRowCount; i++) {
    mainRows.push(<IngredientRow key={i} />);
  }

  const incrementRowCount = (e) => {
    e.preventDefault();
    setRowCount((v) => v + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {};

    data.title = formData.get('title');

    const ingredients = formData.getAll('ingredient');
    const amounts = formData.getAll('amount');
    const units = formData.getAll('unit');

    data.ingredients = ingredients.map((ingredient, iter) => ({
      ingredient: ingredient,
      amount: amounts[iter],
      unit: units[iter],
    }));

    data.tags = [...new Set(formData.get('tags').split(' '))];

    console.log(data);
    addRecipe(data);
    setShowNewRecipeModal(false);
  };

  return (
    <div className="font-body fixed w-full top-0 bottom-0 overflow-y-scroll bg-zinc-100 z-50 p-4 flex flex-col">
      <button onClick={() => setShowNewRecipeModal(false)}>back arrow</button>
      <h1 className="text-4xl font-extrabold font-heading py-4 mb-8">
        Add new recipe
      </h1>
      <form
        className="flex flex-col gap-4"
        id="addNewForm"
        name="addNewForm"
        onSubmit={handleSubmit}
      >
        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="block w-full rounded-full py-1 px-3"
          type="text"
          id="title"
          name="title"
        />
        <p className="font-bold" htmlFor="">
          Ingredients
        </p>
        <div className="grid grid-cols-311 gap-4 w-full">
          <div className="">
            <label htmlFor="ingredient">Ingredient</label>
          </div>
          <div className="">
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="">
            <label htmlFor="unit">Unit</label>
          </div>
        </div>
        {mainRows}

        <button onClick={incrementRowCount} type="button">
          add row
        </button>

        <label className="font-bold" htmlFor="tags">
          Tags
        </label>
        <p>Enter tags separated by spaces</p>
        <input
          type="text"
          id="tags"
          name="tags"
          className="block w-full rounded-full py-1 px-3"
        />
        <button
          className="h-10 mt-auto font-bold text-xl rounded-full bg-yellow-300 text-slate-900 shadow-md"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;

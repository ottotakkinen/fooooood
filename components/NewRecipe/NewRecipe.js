import { DataThresholdingOutlined, TextIncrease } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useCallback } from 'react';
import IngredientRow from './IngredientRow';
import Button from '../UI/Button';
import StepRow from './StepRow';

const NewRecipe = ({ setShowNewRecipeModal, addRecipe }) => {
  const [ingredientRows, setIngredientRows] = useState([]);
  const [stepRows, setStepRows] = useState([]);

  useEffect(() => {
    addNewIngredientRow();
    addNewStepRow();
  }, [addNewIngredientRow, addNewStepRow]);

  const removeIngredientRow = useCallback((id) => {
    setIngredientRows((rows) => rows.filter((el) => el.props.id !== id));
  }, []);

  const removeStepRow = useCallback((id) => {
    setStepRows((rows) => rows.filter((el) => el.props.id !== id));
  }, []);

  const addNewIngredientRow = useCallback(
    (e, autofocus = false) => {
      if (e) {
        e.preventDefault();
      }
      const id = uuidv4();
      setIngredientRows((v) => [
        ...v,
        <IngredientRow
          id={id}
          removeIngredientRow={removeIngredientRow}
          key={id}
          autofocus={autofocus}
        />,
      ]);
    },
    [removeIngredientRow]
  );

  const addNewStepRow = useCallback(
    (e, autofocus = false) => {
      if (e) {
        e.preventDefault();
      }
      const id = uuidv4();
      setStepRows((v) => [
        ...v,
        <StepRow
          id={id}
          removeStepRow={removeStepRow}
          key={id}
          autofocus={autofocus}
        />,
      ]);
    },
    [removeStepRow]
  );

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

    data.steps = formData.getAll('step');

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
        <p className="font-bold">Ingredients</p>
        <div className="grid grid-cols-ingredient gap-4 w-full">
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
        {ingredientRows}

        <button
          className="text-neutral-600"
          onClick={(e) => addNewIngredientRow(e, true)}
          type="button"
        >
          <AddCircleOutlineIcon /> Add ingredient
        </button>

        <label className="font-bold" htmlFor="steps">
          Steps
        </label>
        {stepRows}
        <button
          className="text-neutral-600"
          onClick={(e) => addNewStepRow(e, true)}
          type="button"
        >
          <AddCircleOutlineIcon /> Add step
        </button>

        <label className="font-bold" htmlFor="tags">
          Tags
        </label>
        <p className="text-sm">Enter tags separated by spaces</p>
        <input
          type="text"
          id="tags"
          name="tags"
          className="block w-full rounded-full py-1 px-3"
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default NewRecipe;

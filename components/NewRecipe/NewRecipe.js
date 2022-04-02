import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useCallback } from 'react';
import IngredientRow from './IngredientRow';
import Button from '../UI/Button';
import StepRow from './StepRow';
import { useRouter } from 'next/router';

const NewRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [ingredientRows, setIngredientRows] = useState([]);
  const [stepRows, setStepRows] = useState([]);

  const router = useRouter();

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

  useEffect(() => {
    addNewIngredientRow();
    addNewStepRow();
  }, [addNewIngredientRow, addNewStepRow]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    data.tags = [...new Set(formData.get('tags').split(' '))]; // get unique tags by spreading a Set
    data.public = formData.get('public') === 'on' ? true : false;

    try {
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="font-body w-full min-h-screen bg-zinc-100 flex flex-col items-center overflow-y-scroll">
      <div className="w-full md:max-w-2xl  bg-zinc-100 z-50 p-4 flex flex-col">
        <h1 className="text-4xl font-extrabold font-heading py-4 mb-8">
          Add new recipe
        </h1>
        <form
          className="flex flex-col gap-4 mb-8"
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
          <p className="font-bold mt-4">Ingredients</p>
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
          <label className="font-bold mt-4" htmlFor="steps">
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
          <label className="font-bold mt-4" htmlFor="tags">
            Tags
          </label>
          <p className="text-sm">Enter tags separated by spaces</p>
          <input
            type="text"
            id="tags"
            name="tags"
            className="block w-full rounded-full py-1 px-3"
          />
          <p className="font-bold mt-4">Public</p>
          <div>
            <input
              type="checkbox"
              id="public"
              name="public"
              className="mr-2 mb-8"
            />
            <label htmlFor="public">Set public - everyone can see it!</label>
          </div>

          <Button type="submit" loading={loading}>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;

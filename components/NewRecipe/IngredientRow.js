import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const IngredientRow = ({ id, removeIngredientRow, autofocus = false }) => {
  return (
    <div className="grid grid-cols-ingredient gap-4 w-full">
      <div className="">
        <input
          className="block w-full rounded-full py-1 px-3"
          type="text"
          name="ingredient"
          id="ingredient"
          autoFocus={autofocus}
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
          autoCapitalize="off"
        />
      </div>
      <button
        className="text-neutral-600"
        type="button"
        onClick={() => removeIngredientRow(id)}
      >
        <RemoveCircleOutlineIcon />
      </button>
    </div>
  );
};

export default IngredientRow;

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const StepRow = ({ id, removeStepRow, autofocus = false }) => {
  return (
    <div className="grid grid-cols-ingredient gap-4 w-full">
      <input
        className="col-span-3 block w-full rounded-full py-1 px-3"
        type="text"
        name="step"
        id="step"
        autoFocus={autofocus}
      />
      <button
        className="text-neutral-600"
        type="button"
        onClick={() => removeStepRow(id)}
      >
        <RemoveCircleOutlineIcon />
      </button>
    </div>
  );
};

export default StepRow;

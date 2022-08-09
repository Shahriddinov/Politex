/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
const Input = ({ invalid = false, label = null, ...props }) => {
  return (
    <div className="w-full block">
      {!!label && <label className="font-medium">{label}</label>}
      <input
        {...props}
        className={`${
          invalid ? "border-red-500" : "border-primary_green"
        } bg-transparent border rounded px-2 py-1 duration-300 focus:outline-none block w-full`}
      />
    </div>
  );
};

export default Input;

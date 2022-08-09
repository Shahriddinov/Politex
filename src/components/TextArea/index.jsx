/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
const TextArea = ({ invalid = false, label, ...props }) => {
  return (
    <div className="block w-full">
      {!!label && <label>{label}</label>}
      <textarea
        {...props}
        className={`${
          invalid ? "border-red-500" : "border-primary_green"
        } bg-transparent border duration-300 rounded px-2 py-1 focus:outline-none block w-full`}
      />
    </div>
  );
};

export default TextArea;

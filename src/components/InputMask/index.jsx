/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import InputMaskBase from "react-input-mask";

const InputMask = ({ invalid = false, label = null, mask = null, ...props }) => (
  <div className="w-full block">
    {!!label && <label className="font-medium">{label}</label>}
    <InputMaskBase mask={mask} {...props}>
      {inputProps => (
        <input
          {...inputProps}
          className={`${
            invalid ? "border-red-500" : "border-primary_green"
          } duration-300 bg-transparent border rounded px-2 py-1  focus:outline-none block w-full`}
        />
      )}
    </InputMaskBase>
  </div>
);

export default InputMask;

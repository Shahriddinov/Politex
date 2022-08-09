/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import "./button.css";

const Button = ({ title, ...props }) => {
  return (
    <button {...props} id="button">
      <span>{title}</span>
    </button>
  );
};

export default Button;

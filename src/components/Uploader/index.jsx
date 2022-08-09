/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { CloseOutlined, FileFilled } from "@ant-design/icons";
import { useRef, useState } from "react";

const Uploader = ({ invalid = false, label, placeholder, onChange = () => null, name, ...props }) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const handleChange = e => {
    setFile(inputRef?.current?.files[0]);
    onChange(e);
  };

  const handleReset = () => {
    setFile(null);
    inputRef.current.value = null;
  };

  return (
    <div className="block w-full">
      {!!label && <label className="font-medium">{label}</label>}
      <div className={`${invalid ? "border-red-500" : "border-primary_green"} border duration-300 rounded flex items-center w-full`}>
        {file ? (
          <div className="bg-primary_green bg-opacity-20 max-h-max mx-2 my-1 rounded px-4 flex items-center justify-between gap-2 w-4/5">
            <div className="text-primary_green cursor-pointer flex items-center justify-center">
              <FileFilled />
            </div>
            <div className="w-full truncate ">{file?.name}</div>
            <div className="text-red-500 cursor-pointer flex items-center justify-center" onClick={handleReset}>
              <CloseOutlined />
            </div>
          </div>
        ) : (
          <div className="w-4/5 px-2">{placeholder}</div>
        )}

        <label htmlFor="file" className="bg-primary_green text-white py-2 rounded w-1/5 flex items-center justify-center cursor-pointer">
          <FileFilled />
          <input name={name} {...props} ref={inputRef} id="file" type="file" hidden onChange={handleChange} />
        </label>
      </div>
    </div>
  );
};

export default Uploader;

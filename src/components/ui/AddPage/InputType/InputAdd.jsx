import React from "react";

const InputAdd = ({
  type,
  inputVal,
  setInputVal,
  label,
  options = [],
  placeholder,
  name,
}) => {
  // const handleChangeVal = (e) => {
  //   const { value } = e.target;
  //   setInputVal(value);
  // };
  return (
    <>
      {(type === "text" || !type) && (
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            {label}
          </label>
          <input
            name={name}
            type="text"
            value={inputVal}
            placeholder={placeholder}
            onChange={setInputVal}
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
      )}
      {type === "select" && (
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            {label}
          </label>
          <select
            name={name}
            value={inputVal}
            onChange={setInputVal}
            className="mt-1 p-2 py-3 w-full border text-[#666666] rounded-lg"
          >
            <option className="" value="">
              Piih {label}
            </option>
            {options.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default InputAdd;

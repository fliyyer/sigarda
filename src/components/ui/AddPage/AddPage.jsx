import React, { useContext, useState } from "react";
import InputAdd from "./InputType/InputAdd";
import DragInput from "./InputType/DragInput";

const AddPage = ({ inputs, dragInput, submit }) => {
  return (
    <div className="container flex mt-8 gap-14">
      <form
        onSubmit={submit}
        className="w-[400px] bg-[#F6F8FF] p-10 rounded-[40px] flex flex-col"
      >
        {inputs.map((v) => (
          <InputAdd inputVal={v.value} setInputVal={v.setValue} type={v.type} label={v.label} placeholder={v.placeholder} options={v.options} />
        ))}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#457EFF] text-white px-5 py-3 hover:bg-darker duration-100 ease-in-out rounded-[40px]"
          >
            Simpan
          </button>
        </div>
      </form>
      {dragInput && <DragInput attribute={dragInput} />}
    </div>
  );
};

export default AddPage;

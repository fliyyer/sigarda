import React from "react";
import { CloseButton, CloudAdd } from "../../../../assets/icons";

const DragInput = ({ attribute }) => {
  const { onUpload } = attribute;

  const handleChange = (e) => {
    const { files } = e.target;
    onUpload(files[0]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    onUpload(files[0]);
  };
  return (
    <div className="bg-[#F6F8FF] py-8 px-6 rounded-[30px] h-full">
      <div>
        <div className="flex items-center border-b-[3px] pb-4">
          <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center border-2">
            <CloudAdd />
          </div>
          <div className="pl-4">
            <p className="text-[#457EFF] font-medium">Unggah Sekarang</p>
            <p className="text-[#A9ACB4]">Pilih dan unggah dokumen</p>
          </div>
        </div>
        <div className="pt-6">
          <div
            onDrop={handleDrop}
            onDragOver={onDragOver}
            className="py-6 flex flex-col gap-y-8 border-2 bg-white rounded-2xl border-dashed"
          >
            <div className="mx-auto">
              <CloudAdd />
            </div>
            <div className="mx-auto text-center">
              <p className="text-[#457EFF] font-medium">
                Pilih atau drag & drop file ke sini
              </p>
              <p className="text-[#A9ACB4] text-xs">
                Format file yang diterima: .xlx .xlsx
              </p>
            </div>
            <div className="mx-auto pt-2">
              <label
                htmlFor="upload"
                className="py-3 rounded-lg px-6 text-white bg-[#457EFF] cursor-pointer"
              >
                Unggah File
              </label>
              <input
                onChange={handleChange}
                className="hidden"
                id="upload"
                type="file"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragInput;

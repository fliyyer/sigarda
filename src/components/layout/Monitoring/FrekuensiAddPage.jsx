import React, { useState } from "react";
import AddFrekuensi from "../../ui/AddFrekuensi";

const FrekuensiAddPage = () => {
  const [value, setValue] = useState({});
  const handleSetValue = (val) => {
    setValue(val);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleUpload = (val) => {
    console.log(val, "berhasil gesss")
  }
  return <AddFrekuensi onSubmit={handleSubmit} setValue={handleSetValue} onFileUpload={handleUpload} />;
};

export default FrekuensiAddPage;

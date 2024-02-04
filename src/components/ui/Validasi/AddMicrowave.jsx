import React, { useState } from "react";
import AddFrekuensi from "../../ui/AddFrekuensi";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import Swal from "sweetalert2";

const AddMicrowave = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  const handleSetValue = (val) => {
    setValue(val);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/microwave_link.php', value);
      Swal.fire({
        icon: "success",
        text: 'Berhasil Menambahkan Data'
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Gagal menambahkan data"
      })
    }
    navigate("/validasi");
  };
  const handleUpload = (val) => {
    console.log(val, "berhasil gesss");
  };
  return (
    <AddFrekuensi
      onSubmit={handleSubmit}
      setValue={handleSetValue}
      onFileUpload={handleUpload}
    />
  );
};

export default AddMicrowave;

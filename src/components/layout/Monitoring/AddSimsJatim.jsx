import React, { useState } from "react";
import AddFrekuensi from "../../ui/AddFrekuensi";
import api from "../../../services/api";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddSimsJatim = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate()

  const handleSetValue = (val) => {
    setValue(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/sims_jatim.php', value);
      Swal.fire({
        icon: "success",
        text: response.message
      })
      navigate("/monitoring/sims")
    } catch (error) {
      console.error('Error membuat identifikasi:', error);
      Swal.fire({
        icon: "error",
        text: error.message
      })
    }
  };


  const handleUpload = (val) => {
    console.log(val, "berhasil gesss");
  };

  return <AddFrekuensi onSubmit={handleSubmit} setValue={handleSetValue} onFileUpload={handleUpload} />;
};

export default AddSimsJatim;
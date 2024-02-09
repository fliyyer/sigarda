import React, { useState } from "react";
import AddPage from "../../ui/AddPage/AddPage";

const AddSpt = () => {
  const [valueInputs, setValueInputs] = useState({
    no_spt: "",
    personil: "",
    kode_kegiatan: "",
    start_kegiatan: "",
    end_kegiatan: ""
  });
  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    const valObj = {
      [name]: value,
    };
    const fixValue = { ...valueInputs, ...valObj };
    setValueInputs(fixValue);
  };

  return (
    <div>
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Buat SPT</h1>
      <AddPage
        inputs={[
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "number",
            label: "Nomor SPT",
            placeholder: "Input nomor SPT",
            name: "no_spt",
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "date",
            label: "Tanggal Mulai Kegiatan",
            name: "start_kegiatan",
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "date",
            label: "Tanggal Berakhir Kegiatan",
            name: "end_kegiatan",
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "select",
            label: "Personil",
            name: "personil",
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "select",
            label: "Kode Kegiatan",
            name: "kode_kegiatan",
          },
        ]}
      />
    </div>
  );
};

export default AddSpt;

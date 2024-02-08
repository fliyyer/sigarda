import React, { useState } from "react";
import AddPage from "../../ui/AddPage/AddPage";

const AddPegawai = () => {
  const [valueInputs, setValueInputs] = useState({
    nama_pegawai: "",
    nip_pegawai: "",
    golongan: "",
    jabatan: "",
    tim_kerja: "",
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
      <h1 className="text-[#5E5E5E] text-2xl font-bold">SPT</h1>
      <AddPage
        inputs={[
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "text",
            label: "Nama Pegawai",
            placeholder: "Input Nama Pegawai",
            name: "nama_pegawai",
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "text",
            label: "NIP",
            placeholder: "Input NIP Pegawai",
            name: "nip_pegawai",
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "select",
            label: "Golongan",
            name: "golongan",
            options: ["IIA", "IIB", "IIIA", "IIIB", "IVA", "IVB"],
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "select",
            label: "Jabatan",
            name: "jabatan",
            options: ["PFR", "Admin"],
          },
          {
            value: valueInputs,
            setValue: handleChangeInputs,
            type: "select",
            label: "Tim Kerja",
            name: "tim_kerja",
            options: ["Monev", "TU", "Pelayanan"],
          },
        ]}
        dragInput={{}}
      />
    </div>
  );
};

export default AddPegawai;

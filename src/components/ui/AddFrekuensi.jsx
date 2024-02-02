import React, { useState } from "react";
import AddPage from "./AddPage/AddPage";

const AddFrekuensi = ({
  onSubmit,
  setValue,
  onFileUpload,
}) => {
  const [openUpload, setOpenUpload] = useState(true);
  const [valueInputs, setValueInputs] = useState({
    frekuensi: "",
    client: "",
    servis: "",
    subservis: "",
    kelasemisi: "",
    status: "",
  });

  const services = [
    "Amateur",
    "Broadcast",
    "Distress",
    "Fixed",
    "Land Mobile",
    "Maritime",
    "Satellite",
  ];
  const subservices = [
    "AM",
    "FM",
    "DVB-T",
    "Ground To Air",
    "Vessel Station",
    "P2P",
    "M2P",
  ];
  const kelasemisiOptions = ["A3E", "C3F", "F3E"];
  const statusOptions = ["On Air", "Off Air", "Prelim. Cancel"];

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    const valObj = {
      [name]: value,
    };
    const fixValue = { ...valueInputs, ...valObj }
    setValueInputs(fixValue);
    setValue(fixValue)
  };

  return (
    <AddPage
      submit={onSubmit}
      inputs={[
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: "text",
          label: "Frekuensi",
          placeholder: "Input Frekuensi (MHz)",
          name: "frekuensi",
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: "text",
          label: "Client",
          placeholder: "Input Nama Client",
          name: "client",
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: "select",
          label: "Servis",
          options: services,
          name: "servis",
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: "select",
          label: "Subservis",
          options: subservices,
          name: "subservis",
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: "select",
          label: "Kelas Emisi",
          options: kelasemisiOptions,
          name: "kelasemisi",
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: "select",
          label: "Status",
          options: statusOptions,
          name: "status",
        },
      ]}
      dragInput={{
        open: openUpload,
        setOpen: setOpenUpload,
        onUpload: onFileUpload,
      }}
    />
  );
};

export default AddFrekuensi;

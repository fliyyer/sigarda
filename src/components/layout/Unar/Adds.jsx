import React, { useState } from 'react';
import AddPage from '../../ui/AddPage/AddPage';

const Adds = ({ onSubmit, setValue, onFileUpload }) => {
  const [openUpload, setOpenUpload] = useState(true);
  const [valueInputs, setValueInputs] = useState({
    frequency: '',
    client: '',
    service: '',
    subservice: '',
    emission_class: '',
    status: '',
  });

  const services = [
    'Amateur',
    'Broadcast',
    'Distress',
    'Fixed',
    'Land Mobile',
    'Maritime',
    'Satellite',
  ];
  const subservices = [
    'AM',
    'FM',
    'DVB-T',
    'Ground To Air',
    'Vessel Station',
    'P2P',
    'M2P',
  ];
  const kelasemisiOptions = ['Hadir', 'Tidak Hadir'];
  const statusOptions = ['Lulus', 'Tidak Lulus', 'Tidak Hadir'];

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    const valObj = {
      [name]: value,
    };
    const fixValue = { ...valueInputs, ...valObj };
    setValueInputs(fixValue);
    setValue(fixValue);
  };

  return (
    <AddPage
      submit={onSubmit}
      inputs={[
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: 'text',
          label: 'Nama',
          placeholder: 'Input Nama',
          name: 'nama',
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: 'text',
          label: 'Kategori',
          placeholder: 'Input Kategori',
          name: 'kategori',
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: 'text',
          label: 'Tipe Ujian',
          placeholder: 'Input Tipe Ujian',
          name: 'tipeUjian',
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: 'select',
          label: 'Lokasi Ujian',
          placeholder: 'Input Lokasi',
          name: 'lokasi',
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: 'select',
          label: 'Kehadiran',
          options: kelasemisiOptions,
          name: 'kehadiran',
        },
        {
          value: valueInputs,
          setValue: handleChangeInputs,
          type: 'select',
          label: 'Status',
          options: statusOptions,
          name: 'status',
        },
      ]}
    />
  );
};

export default Adds;

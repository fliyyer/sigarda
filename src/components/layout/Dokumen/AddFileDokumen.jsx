import React, { useRef } from 'react';
import Clouds from '../../../assets/icons/cloud.svg';

const AddFileDokumen = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='p-11 bg-[#F6F8FF] rounded-lg flex flex-col max-[800px]:p-6'>
      <div className='flex border p-4 border-dashed rounded-xl border-[#4676FB] items-center gap-6 relative max-[800px]:flex-col'>
        <img src={Clouds} alt="" />
        <div>
          <p className='text-[#3A3A49]'>Pilih file atau drag & drop ke sini</p>
          <p className='text-[#ADC0F8] mt-[14px]'>JPG, XLSX, atau PDF, ukuran file tidak lebih dari 10MB</p>
        </div>
        <input ref={fileInputRef} type="file" className="hidden" />
        <button onClick={handleButtonClick} className='p-3 border-2 text-xs uppercase text-[#4676FB] border-[#4676FB] rounded-lg'>
          Pilih File
        </button>
      </div>
      <div className='gap-5 flex justify-end mt-4'>
        <button>Batal</button>
        <button className='py-2 px-4 bg-[#4676FB] text-white rounded-lg'>+ Unggah </button>
      </div>
    </div>
  );
};

export default AddFileDokumen;

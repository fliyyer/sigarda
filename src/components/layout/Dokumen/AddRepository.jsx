import React from 'react';

const AddRepository = () => {
  return (
    <div className='bg-[#F6F8FF] rounded-lg p-4'>
      <h1 className='text-[#3A3A49] text-2xl'>Tambah file ke repository</h1>
      <p className='text-[15px] text-[#3A3A49] mt-[30px] font-semibold'>Pilih Folder:</p>
      <select name="folder" id="folder" className='w-full py-2 border px-1 rounded-md mt-3 border-[#4676FB]'>
        <option value="Document">Document</option>
        <option value="Images">Images</option>
        <option value="Videos">Videos</option>
        {/* Tambahkan opsi folder lainnya di sini sesuai kebutuhan */}
      </select>
      <p className='mt-[20px] text-[#3A3A49] font-semibold text-sm '>Akses File</p>
      <div className='flex mt-3 gap-4'>
        <input type="checkbox" className='border border-[#4676FB]' />
        <p>Jadikan File Privat</p>
      </div>
    </div>
  );
};

export default AddRepository;

import React from 'react';

const AddTamu = () => {
  const perangkats = [
    'Konsultasi Perizinan',
    'Aduan Gangguan',
    'Informasi',
    'Konsultasi Amatir',
    'Lainnya  ',
  ];
  return (
    <div className="container mx-auto mt-8">
      <form className="w-[400px] bg-[#F6F8FF] p-10 rounded-[40px] gap-5 flex flex-col">
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            placeholder="Input Nama Lengkap"
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Perusahaan / Instansi
          </label>
          <input
            type="text"
            name="perusahaan"
            placeholder="Input Nama Perushaan / Instansi"
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Kontak  
          </label>
          <input
            type="text"
            name="kontak"
            placeholder="Input Kontak"
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Jenis Perangkat
          </label>
          <select
            name="perangkat"
            className="mt-1 p-2 py-3 w-full border text-[#666666] rounded-lg">
            <option className="" value="">
              Piih Jenis Perangkat
            </option>
            {perangkats.map((perangkat) => (
              <option key={perangkat} value={perangkat}>
                {perangkat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#457EFF] text-white px-5 py-3 hover:bg-darker duration-100 ease-in-out rounded-[40px]">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTamu;

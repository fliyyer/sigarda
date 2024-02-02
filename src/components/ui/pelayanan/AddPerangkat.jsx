import React from 'react';

const AddPerangkat = () => {
  const perangkats = [
    'Frequency Counter',
    'Antenna',
    'Spectrum Analyzer',
    'Portable Receiver',
    'Others',
  ];
  return (
    <div className="container mx-auto mt-8">
      <form className="w-[400px] bg-[#F6F8FF] p-10 rounded-[40px] gap-5 flex flex-col">
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
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Merk
          </label>
          <input
            type="text"
            name="merk"
            placeholder="Input Merk Perangkat"
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Tipe
          </label>
          <input
            type="text"
            name="tipe"
            placeholder="Input Tipe Perangkat"
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Tahun
          </label>
          <input
            type="text"
            name="tahun"
            placeholder="Input Tahun Pembelian Perangkat"
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div>
          <label className="block text-base text-[#457EFF] font-medium">
            Gambar Perangkat
          </label>
          <input
            type="file"
            name="gambar"
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
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

export default AddPerangkat;

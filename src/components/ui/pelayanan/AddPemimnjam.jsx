import React from 'react'

const AddPemimnjam = () => {
    const data_petugas = [
        'I Nyoman Kariyasa',
        'Kadek Argus',
        'Gede Eka',
        'Ni Luh Estry',
      ];
  return (
    <div className="container mx-auto mt-8">
    <form className="w-[400px] bg-[#F6F8FF] p-10 rounded-[40px] gap-5 flex flex-col">
    <div>
        <label className="block text-base text-[#457EFF] font-medium">
          Nomor SPT
        </label>
        <input
          type="text"
          name="spt"
          placeholder="Input Nomor SPT"
          className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
        />
      </div>
      <div>
        <label className="block text-base text-[#457EFF] font-medium">
          Tanggal Peminjaman
        </label>
        <input
          type="date"
          name="tgl_peminjaman"
          className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
        />
      </div>
      <div>
        <label className="block text-base text-[#457EFF] font-medium">
          Tanggal Pengembalian
        </label>
        <input
          type="date"
          name="tgl_pengembalian"
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
            Piih Nama Pemimjam
          </option>
          {data_petugas.map((petugas) => (
            <option key={petugas} value={petugas}>
              {petugas}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-base text-[#457EFF] font-medium">
          Jenis Perangkat
        </label>
        <select
          name="perangkat"
          className="mt-1 p-2 py-3 w-full border text-[#666666] rounded-lg">
          <option className="" value="">
            Piih Nama Petugas
          </option>
          {data_petugas.map((petugas) => (
            <option key={petugas} value={petugas}>
              {petugas}
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
  )
}

export default AddPemimnjam
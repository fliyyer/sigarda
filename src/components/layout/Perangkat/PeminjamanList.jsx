import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const data = [
    {
        id: 1,
        perangkat: 'Perangkat 1',
        status: 'Tersedia',
        merk: 'Merk 1',
        gambar: 'https://img.id.my-best.com/product_images/ecc7b5dab4fbb0c06e89b3994a261fe6.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=ffbe6d87c4a08285e88f2dac9d4240d8'
    },
    {
        id: 2,
        perangkat: 'Perangkat ',
        status: 'Tidak Tersedia',
        merk: 'Radio',
        gambar: 'https://img.id.my-best.com/product_images/ecc7b5dab4fbb0c06e89b3994a261fe6.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=ffbe6d87c4a08285e88f2dac9d4240d8'
    },

]
const PeminjamanList = () => {

    const getStatus = (status) => {
        switch (status) {
          case 'Tidak Tersedia':
            return 'bg-[#F4485D] text-[#F4485D]';
          case 'Tersedia':
            return 'bg-[#16AE65] text-[#16AE65]';
          default:
            return '';
        }
      };

  return (
    <div>
         <div>
        <Link to='/pelayanan/perangkat/peminjaman/add-peminjaman' className="flex gap-2 hover:underline mt-[15px] text-sm pl-6 items-center">
          <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
            <FaPlus />
          </span>
          Tambah Data
        </Link>
      </div>
        <div className="overflow-x-auto p-11 bg-[#F6F8FF] rounded-[40px] mt-10">
      <table className='min-w-full rounded-[40px] bg-[#fff]'>
            <thead className=''>
              <tr className=''>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>#</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Jenis Perangkat</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Merk / Type</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Gambar</th>
                <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Status</th>
              </tr>
            </thead>
                {
                    data.map((item) => (
                        <tbody className='bg-white'>
                <tr key={item.id}>
                    <td className='px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap'>{item.id}</td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{item.perangkat}</td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{item.merk}</td>
                    <td className='px-6 text-[#000000] flex items-center text-sm py-4'>
                      <img src={item.gambar} className='max-w-[135px] mx-auto max-h-[75px]' alt="" />
                    </td>
                    <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>
                        { item.status && (
                        <div className={`flex items-center justify-center gap-1 rounded-full py-2 bg-opacity-25 text-xs font-normal ${getStatus(item.status)}`}>
                            <div className={`rounded-full ${getStatus(item.status)} w-[8px] h-[8px] font-medium`}></div>
                            <p>{item.status}</p>
                        </div>
                        )}
                    </td>
                </tr>
                </tbody>
                    ))
                }
        </table>
      </div>
    </div>
  )
}

export default PeminjamanList
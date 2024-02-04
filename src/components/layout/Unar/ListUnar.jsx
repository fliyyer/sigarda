import React from 'react'
import { tamu, unar } from '../../../utils/identifikasi';

const ListUnar = () => {
    const getStatus = (status) => {
        switch (status) {
            case 'Tidak Lulus':
                return 'bg-[#F4485D] text-[#F4485D]';
            case 'Lulus':
                return 'bg-[#16AE65] text-[#16AE65]';
            case 'Tidak Hadir':
                return 'bg-[#457EFF] text-[#457EFF]';
            default:
                return '';
        }
    };

    const data = unar.data;
    return (
        <div className="overflow-x-auto p-11 bg-[#F6F8FF] rounded-[40px] mt-10">
            <table className='min-w-full rounded-[40px] bg-[#fff]'>
                <thead className=''>
                    <tr className=''>
                        <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>#</th>
                        <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Nama</th>
                        <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Kategori</th>
                        <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Tipe Ujian</th>
                        <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Lokasi Ujian</th>
                        <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Kehadiran</th>
                        <th className='px-6 py-3 text-center text-sm font-semibold text-[#334158] tracking-wider'>Status</th>

                    </tr>
                </thead>
                {
                    data.map((item) => (
                        <tbody className='bg-white'>
                            <tr key={item.id}>
                                <td className='px-6 text-[#676F82] text-center text-sm py-4 whitespace-nowrap'>{item.id}</td>
                                <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{item.nama}</td>
                                <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{item.kategori}</td>
                                <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{item.ujian}</td>
                                <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{item.lokasi}</td>
                                <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>{item.kehadiran}</td>
                                <td className='px-6 text-[#000000] text-center text-sm py-4 whitespace-nowrap'>
                                    {item.status && (
                                        <div className={`flex items-center justify-center gap-1 rounded-full py-2 bg-opacity-25 text-xs font-medium ${getStatus(item.status)}`}>
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
    )
}

export default ListUnar

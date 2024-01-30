import React from 'react'
import CardCapaian from '../../components/ui/CardCapaian'
import Peta from '../../assets/image/peta.svg'
import Rekap from '../../assets/image/rekap.svg'

const Dashboard = () => {
    return (
        <div className=''>
            <h1 className="text-[24px] font-bold leading-[16px] text-[#5E5E5E]">Dashboard</h1>
            <div className='grid py-10 grid-cols-3 gap-[26px]'>
                <CardCapaian title="Capaian PK Monitoring" persentase="22%" value="2 dari 9" kota="Kabupaten/Kota di Provinsi Bali telah termonitor" to='/' />
                <CardCapaian title="Capaian PK Pengukuran" persentase="82%" value="70 dari 85" kota="Stasiun Radio Siaran dan TV Digital telah terukur" to='/' />
                <CardCapaian title="Capaian PK Validasi ISR" persentase="90%" value="347 dari 385" kota="Target ISR telah divalidasi" to='/' />
            </div>
            <div className='grid grid-cols-2  gap-12'>
                <div className='bg-[#F6F8FF] flex flex-col  items-center justify-center rounded-[40px] px-[20px] py-2'>
                    <p className='text-[#5E5E5E] text-center text-2xl'>Peta Sebaran Frekuensi Termonitor</p>
                    <img className='w-[490px]' src={Peta} alt="Peta Sebaran Frekuensi Termonitor" />
                </div>
                <div className='bg-[#F6F8FF] flex flex-col  items-center justify-center rounded-[40px] px-[20px] py-2'>
                    <p className='text-[#5E5E5E] text-center text-2xl'>Peta Sebaran Frekuensi Termonitor</p>
                    <img src={Rekap} alt="Rekapitulasi Frekuensi Termonitor" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard

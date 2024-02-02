import React from 'react'
import CardCapaian from '../../components/ui/CardCapaian'
import Peta from '../../assets/image/peta.svg'
import Sla from '../../assets/image/sla.png'

const DashboardPel = () => {
    return (
        <div>
            <h1 className="text-[24px] font-bold leading-[16px] text-[#5E5E5E]">Dashboard</h1>
            <div className='grid py-10 grid-cols-3 gap-[26px]'>
                <CardCapaian title="Capaian Pemanfaatan SMFR" persentase="100%" value="5 dari 5" kota="SMFR dimanfaatkan " to='/' />
                <CardCapaian title="Capaian UNAR" persentase="89%" value="8 dari 9" kota="Kabupaten/Kota di Provinsi Bali telah dilaksanakan UNAR" to='/' />
                <CardCapaian title="Kunjungan Tamu" persentase="12" value="12" kota="Tamu telah berkunjung" to='/' />
            </div>
            <div className='grid grid-cols-2 2xl:mt-[66px] gap-12'>
                <div className='bg-[#F6F8FF] flex flex-col  items-center justify-center rounded-[40px] px-[20px] py-2'>
                    <p className='text-[#5E5E5E] text-center text-2xl'>Peta Sebaran Peserta UNAR</p>
                    <img className='w-[360px] 2xl:w-[490px]' src={Peta} alt="Peta Sebaran Frekuensi Termonitor" />
                </div>
                <div className='bg-[#F6F8FF] flex flex-col  items-center justify-center rounded-[40px] px-[20px] py-2'>
                    <p className='text-[#5E5E5E] text-center text-2xl'>Penggunaan Perangkat SLA</p>
                    <img className='w-[360px] 2xl:w-[490px]' src={Sla} alt="SLA" />
                </div>
            </div>
        </div>
    )
}

export default DashboardPel

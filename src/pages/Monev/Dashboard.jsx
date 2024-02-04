import React from 'react';
import CardCapaian from '../../components/ui/CardCapaian';
import Peta from '../../assets/image/peta.svg';
import Rekap from '../../assets/image/rekap.svg';

const Dashboard = () => {
    return (
        <div className=''>
            <h1 className="text-2xl font-bold text-[#5E5E5E] md:text-3xl">
                Dashboard
            </h1>
            <div className='grid gap-6 md:grid-cols-3 md:gap-8 py-6'>
                <CardCapaian
                    title="Capaian PK Monitoring"
                    persentase="22%"
                    value="2 dari 9"
                    kota="Kabupaten/Kota di Provinsi Bali telah termonitor"
                    to='/monitoring'
                />
                <CardCapaian
                    title="Capaian PK Pengukuran"
                    persentase="82%"
                    value="70 dari 85"
                    kota="Stasiun Radio Siaran dan TV Digital telah terukur"
                    to='/pengukuran'
                />
                <CardCapaian
                    title="Capaian PK Validasi ISR"
                    persentase="90%"
                    value="347 dari 385"
                    kota="Target ISR telah divalidasi"
                    to='/validasi'
                />
            </div>
            {/* Content */}
            <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-2 2xl:mt-8'>
                <div className='bg-[#F6F8FF] rounded-md px-4 py-6'>
                    <p className='text-[#5E5E5E] text-center text-2xl md:text-3xl'>
                        Peta Sebaran Frekuensi Termonitor
                    </p>
                    <img
                        className='w-full md:max-w-[360px] lg:max-w-[490px] mx-auto mt-4'
                        src={Peta}
                        alt="Peta Sebaran Frekuensi Termonitor"
                    />
                </div>

                <div className='bg-[#F6F8FF] rounded-md px-4 py-6'>
                    <p className='text-[#5E5E5E] text-center text-2xl md:text-3xl'>
                        Peta Sebaran Frekuensi Termonitor
                    </p>
                    <img
                        className='w-full md:max-w-[360px] lg:max-w-[490px] mx-auto mt-4'
                        src={Rekap}
                        alt="Rekapitulasi Frekuensi Termonitor"
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

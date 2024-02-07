import React from 'react';
import CardCapaian from '../../components/ui/CardCapaian';
import Peta from '../../assets/image/peta.svg';
import Sla from '../../assets/image/sla.png';

const DashboardPel = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold leading-6 text-[#5E5E5E] md:text-3xl">
                Dashboard
            </h1>

            <div className='grid gap-6 md:grid-cols-3 md:gap-8 py-6'>
                <CardCapaian
                    title="Capaian Pemanfaatan SMFR"
                    persentase="100%"
                    value="5 dari 5"
                    kota="SMFR dimanfaatkan "
                    to='/pelayanan/perangkat'
                />
                <CardCapaian
                    title="Capaian UNAR"
                    persentase="89%"
                    value="8 dari 9"
                    kota="Kabupaten/Kota di Provinsi Bali telah dilaksanakan UNAR"
                    to='/pelayanan/unar'
                />
                <CardCapaian
                    title="Kunjungan Tamu"
                    persentase="12"
                    value="12"
                    kota="Tamu telah berkunjung"
                    to='/pelayanan/tamu'
                />
            </div>
            <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-2 2xl:mt-8'>
                <div className='bg-[#F6F8FF] rounded-md px-4 py-6'>
                    <p className='text-[#5E5E5E] text-center text-2xl md:text-3xl'>
                        Peta Sebaran Peserta UNAR
                    </p>
                    <img
                        className='w-full md:max-w-[360px] lg:max-w-[490px] mx-auto mt-4'
                        src={Peta}
                        alt="Peta Sebaran Frekuensi Termonitor"
                    />
                </div>
                <div className='bg-[#F6F8FF] rounded-md px-4 py-6'>
                    <p className='text-[#5E5E5E] text-center text-2xl md:text-3xl'>
                        Penggunaan Perangkat SLA
                    </p>
                    <img
                        className='w-full md:max-w-[360px] lg:max-w-[490px] mx-auto mt-4'
                        src={Sla}
                        alt="SLA"
                    />
                </div>
            </div>
        </div>
    );
}

export default DashboardPel;

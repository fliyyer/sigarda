import React from 'react';
import { Link } from 'react-router-dom';

const CardCapaian = (props) => {
    const { title, persentase, value, kota, to } = props;

    return (
        <div className='flex flex-col relative bg-[#F6F8FF] rounded-[40px] py-[21px] px-[35px]'>
            <p className='text-base 2xl:text-lg text-[#5E5E5E] leading-[12px]'>{title}</p>
            <p className='text-[#457EFF] text-center my-6 text-4xl md:text-6xl 2xl:text-7xl font-bold leading-[12px]'>{persentase}</p>
            <p className='text-lg 2xl:text-[32px] mb-2 2xl:mb-[23px] font-bold text-[#5E5E5E] leading-[12px]'>{value}</p>
            <p className='text-[#5E5E5E] text-sm 2xl:text-[20px] pb-3 leading-[22px]'>{kota}</p>
            <Link to={to} className='2xl:px-[40px] px-8 bottom-[-20px] right-0 absolute py-2 bg-main-color text-[#FFFFFF] rounded-[40px] hover:bg-darker ease-in-out duration-300'>Lihat</Link>
        </div>
    );
};

export default CardCapaian;

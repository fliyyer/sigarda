import React from 'react';
import { Link } from 'react-router-dom';

const CardCapaian = (props) => {
    const { title, persentase, value, kota, to } = props;

    return (
        <div className='flex flex-col relative bg-[#F6F8FF] rounded-[40px] p-8'>
            <p className='text-base 2xl:text-[24px] mb-4 2xl:mb-6 text-[#5E5E5E] leading-[16px]'>{title}</p>
            <p className='text-[#457EFF] text-center my-7 2xl:my-6 text-6xl 2xl:text-8xl font-bold leading-[16px]'>{persentase}</p>
            <p className='text-2xl 2xl:text-[32px] font-bold text-[#5E5E5E] mt-5 leading-[16px]'>{value}</p>
            <p className='text-[#5E5E5E] text-sm 2xl:text-[20px] mt-2'>{kota}</p>
            <Link to={to} className='2xl:px-[40px] px-8 bottom-[-10px] right-0 absolute py-2 2xl:py-[10px] bg-main-color text-[#FFFFFF] rounded-[40px] hover:bg-darker ease-in-out duration-300'>
                Lihat
            </Link>
        </div>
    );
};

export default CardCapaian;

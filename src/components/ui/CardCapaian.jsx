import React from 'react';
import { Link } from 'react-router-dom';

const CardCapaian = (props) => {
    const { title, persentase, value, kota, to } = props
    return (
        <div className='flex flex-col relative bg-[#F6F8FF] rounded-[40px] py-[31px] px-[45px]'>
            <p className='text-lg 2xl:text-[24px] mb-8 2xl:mb-[40px] text-[#5E5E5E] leading-[16px]'>{title}</p>
            <p className='text-[#457EFF] text-center my-6 2xl:my-[40px] text-[68px] 2xl:text-[96px] font-bold leading-[16px]'>{persentase}</p>
            <p className='text-2xl 2xl:text-[32px] mt-8 2xl:mt-[39px] mb-5 2xl:mb-[23px] font-bold text-[#5E5E5E] leading-[16px]'>{value}</p>
            <p className='text-[#5E5E5E] text-sm 2xl:text-[20px] leading-[22px]'>{kota}</p>
            <Link to={to} className='2xl:px-[40px] px-8 bottom-[-20px] right-0 absolute py-2 2xl:py-[10px] bg-main-color text-[#FFFFFF] rounded-[40px] hover:bg-darker ease-in-out duration-300'>Lihat</Link>
        </div>
    );
};

export default CardCapaian;

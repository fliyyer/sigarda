import React from 'react';
import { Link } from 'react-router-dom';

const CardCapaian = (props) => {
    const { title, persentase, value, kota, to } = props
    return (
        <div className='flex flex-col relative  w-[424px] h-[319px] bg-[#F6F8FF] rounded-[40px] py-[31px] px-[45px]'>
            <p className='text-[24px] mb-[40px] text-[#5E5E5E] leading-[16px]'>{title}</p>
            <p className='text-[#457EFF] text-center my-[40px] text-[96px] font-bold leading-[16px]'>{persentase}</p>
            <p className='text-[32px] mt-[39px] mb-[23px] font-bold text-[#5E5E5E] leading-[16px]'>{value}</p>
            <p className='text-[#5E5E5E] text-[20px] leading-[22px]'>{kota}</p>
            <Link to={to} className='px-[40px] bottom-[-20px] right-0 absolute py-[10px] bg-main-color text-[#FFFFFF] rounded-[40px] hover:bg-darker ease-in-out duration-300'>Lihat</Link>
        </div>
    );
};

export default CardCapaian;

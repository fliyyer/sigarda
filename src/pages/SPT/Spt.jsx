import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import ListSpt from '../../components/layout/Spt/ListSpt'


const Spt = () => {
    const location = useLocation();
    const isLinkActive = (to) => {
        return location.pathname === to;
    }
    return (
        <div className='overflow-hidden'>
            <h1 className="text-[#5E5E5E] text-2xl font-bold">SPT</h1>
            <div className='flex justify-between mt-7 items-center'>
                <Link to='add-spt' className="flex gap-2 hover:underline text-sm pl-6 items-center">
                    <span className="bg-main-color w-[32px] text-[18px] h-[32px] flex justify-center items-center rounded-full text-white">
                        <FaPlus />
                    </span>
                    Tambah Data
                </Link>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search"
                        className="pl-10 pr-4 py-3 outline-none rounded-[40px] bg-[#F6F8FF]"
                        onChange={(e) => handleChangeTable(e, location.pathname)}
                    />
                    <div className="absolute bottom-2 inset-y-0 left-0 flex items-center pl-3">
                        <CiSearch className="w-5 mt-2 h-5 text-[#AEB8CF]" />
                    </div>
                </div>
            </div>
            <div>
                <ListSpt />
            </div>
        </div>
    )
}

export default Spt
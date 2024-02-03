import React, { useState } from 'react';
import {
    LargeDashboard,
    MainLogo,
    SearchIcon,
} from '../../../assets/icons';
import { NavLink } from 'react-router-dom';
import User from '../../../assets/icons/user.png';
import { BiSolidUserDetail } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const Sidebar = () => {
    const [isSimple, setIsSimple] = useState(false);
    const navList = [
        {
            icon: <IoDocumentOutline />,
            largeIcon: LargeDashboard,
            navTitle: 'SPT',
            navTo: 'list-spt',
        },
        {
            icon: <BiSolidUserDetail />,
            largeIcon: LargeDashboard,
            navTitle: 'Kepegawaian',
            navTo: 'kepegawaian',
        },
        {
            icon: <BsArchive />,
            largeIcon: LargeDashboard,
            navTitle: 'Arsip',
            navTo: 'arsip',
        },
        {
            icon: <IoFolderOpenOutline />,
            largeIcon: LargeDashboard,
            navTitle: 'Dokumen',
            navTo: 'dokumen',
        },
        {
            icon: <FaUser />,
            largeIcon: LargeDashboard,
            navTitle: 'Akun',
            navTo: 'akun',
        },
    ];
    const [navMenu, setNavMenu] = useState(navList);
    const [searchMenu, setSearchMenu] = useState('');
    const changeNavMenus = (e) => {
        const { value } = e.target;
        const filteredMenus = navList.filter((val) =>
            val.navTitle.toLowerCase().includes(value.toLowerCase())
        );
        setNavMenu(filteredMenus);
        setSearchMenu(value);
    };

    return (
        <>
            {!isSimple ? (
                <div className="w-[304px] min-h-screen py-4">
                    <div className="bg-slate-100 h-full rounded-3xl">
                        <div className="p-6 flex flex-col justify-between h-full">
                            <div className="flex flex-col gap-y-6">
                                <div className="flex items-center justify-between">
                                    <MainLogo />
                                    <div onClick={() => setIsSimple(true)}>
                                        <AiOutlineMenuFold className='hover:text-main-color cursor-pointer text-xl' />
                                    </div>
                                </div>
                                <div className="flex bg-white items-center justify-center rounded-md border border-[#E2E4EA] px-2 py-2 gap-2 text-sm">
                                    <div className="w-[14px] h-[14px]">
                                        <SearchIcon />
                                    </div>
                                    <input
                                        placeholder="Search"
                                        className="w-full bg-transparent placeholder:text-[#AEB8CF] outline-none"
                                        type="text"
                                        value={searchMenu}
                                        onChange={changeNavMenus}
                                    />
                                </div>
                                <div className="py-4">
                                    {navMenu.map((val) => (
                                        <NavLink
                                            key={val.navTitle}
                                            to={val.navTo}
                                            className={({ isActive }) =>
                                                `${isActive
                                                    ? 'bg-slate-200 text-main-color font-semibold'
                                                    : 'bg-transparent'
                                                } flex text-sm gap-x-3 items-center text-[#676F82] hover:bg-[#E3EAFF] my-1 hover:text-[#457EFF] hover:font-semibold px-4 py-2 rounded-md`
                                            }>
                                            <div className=''>{val.icon}</div>
                                            <div>{val.navTitle}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    <img className="rounded-full w-8 h-8" src={User} alt="" />
                                </div>
                                <div className="w-3/4">
                                    <p className="text-sm font-semibold">Monev</p>
                                    <p className="text-xs text-slate-600">
                                        monev@balmon@com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-[70px] h-screen my-auto px-4 rounded-r-2xl bg-slate-100 flex justify-center items-center">
                    <div>
                        {navList.map((val) => (
                            <NavLink
                                key={val.navTitle}
                                to={val.navTo}
                                className={({ isActive }) =>
                                    `${isActive
                                        ? 'bg-slate-300 text-main-color font-semibold'
                                        : 'bg-transparent'
                                    } flex text-xl text-main-color gap-x-3 hover:bg-slate-100 items-center p-4 rounded-md`
                                }>
                                <div className=''>{val.icon}</div>
                            </NavLink>
                        ))}
                        <div
                            className="flex justify-center pt-6"
                            onClick={() => setIsSimple(false)}>
                            <AiOutlineMenuUnfold className="text-2xl text-main-color cursor-pointer" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;

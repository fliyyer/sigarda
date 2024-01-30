import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import LoginIcon from '../assets/icons/login.svg'

const LoginPage = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleRememberToggle = () => {
        setRememberMe(!rememberMe);
    };

    const handleShowPasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-[#F6F8FF] px-[89px] py-12 flex items-center justify-center">
                <img src={LoginIcon} alt="Sigarda" className="w-[442px] h-[532px] " />
            </div>
            <div className="w-1/2 bg-darker flex items-center justify-center">
                <form className="w-[456px] bg-[#fff] p-12 rounded-[40px]">
                    <h2 className="text-[20px] leading-[28px] tracking-[0.3px] font-semibold mb-[24px]">Selamat Datang di SIGARDA</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-[#333333] text-[15px] leading-[20px] tracking-[0.3px] font-normal mb-2">Username</label>
                        <input type="text" id="username" placeholder="Input username" className="w-full border bg-[#4D4D4D] bg-opacity-10  p-2 placeholder:text-[#808080] placeholder:text-[14px] rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-[#333333] text-[15px] leading-[20px] tracking-[0.3px] font-normal mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Input password"
                                className="w-full border flex p-2 bg-[#4D4D4D] bg-opacity-10 placeholder:text-[#808080] placeholder:text-[14px] rounded-lg"
                            />
                            <span
                                className="absolute right-3 top-[13px] w-4 text-gray-500 cursor-pointer"
                                onClick={handleShowPasswordToggle}
                            >
                                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <div className="flex items-center cursor-pointer" onClick={handleRememberToggle}>
                            <div className={`w-10 h-5  rounded-full p-[3px] transition duration-300 ease-in-out ${rememberMe ? 'bg-main-color' : 'bg-[#E5E5E5]'}`}>
                                <div className={`bg-[#F2F2F2] w-[14px] h-[14px] rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${rememberMe ? 'translate-x-5' : ''}`}></div>
                            </div>
                            <p className='ml-2 text-[15px] text-[#1A1A1A]'>Ingat Saya</p>
                        </div>
                        <Link to="/forgot-password" className="text-sm hover:underline text-main-color">Lupa Password?</Link>
                    </div>
                    <button type="button" className="bg-main-color hover:bg-darker duration-300 ease-in-out w-full text-white my-[32px] p-2 rounded-[40px]">Login</button>
                    <div className='border-b border-[#E5E5E5]'></div>
                    <p className='text-center mt-6 text-sm'>Belum Punya Akun? <Link to="/register" className="text-main-color hover:underline">Kontak Administrator</Link></p>
                    <footer className='flex justify-end text-xs mt-44 text-[#666666]'>© AT 2024</footer>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

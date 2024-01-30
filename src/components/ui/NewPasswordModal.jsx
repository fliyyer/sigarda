import React, { useState } from 'react';
import Sigarda from '../../assets/icons/sigarda.svg';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const NewPasswordModal = ({ show, onSetNewPassword }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();
    const handleSetNewPassword = () => {
        onSetNewPassword(newPassword, confirmPassword);
        setNewPassword('');
        setConfirmPassword('');

        Swal.fire({
            title: 'Tersimpan',
            text: 'Password Anda telah direst',
            icon: 'success',
            confirmButtonColor: '#457EFF',
            confirmButtonText: 'LANJUTKAN',
            customClass: {
                icon: 'custom-icon-color',
                confirmButton: 'custom-confirm-button',
            },
        }).then(() => {
            navigate('/');
        });
    };





    return (
        show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white  py-[60px] px-[80px] rounded-[40px]">
                    <img src={Sigarda} alt="Sigarda" className='w-[140px]' />
                    <h1 className="text-[#153060] text-[45px] my-8 leading-[52px]">Password Baru</h1>
                    <p className="my-8 text-[#828282]">Buat password baru untuk akun Anda.</p>
                    <div className="mb-4">
                        <label htmlFor="newPassword" className="text-[#333333] text-[15px] leading-[20px] tracking-[0.3px] font-normal mb-2">
                            Enter New Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="newPassword"
                                placeholder="buat password baru Anda, minimal 8 karakter"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-[437px] border p-2 bg-[#4D4D4D] bg-opacity-10  placeholder:text-[#808080] placeholder:text-[14px] rounded-lg"
                            />
                            <span
                                className="absolute right-3 top-[13px] w-4 text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="text-[#333333] text-[15px] leading-[20px] tracking-[0.3px] font-normal mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                placeholder="Konfirmasi password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full border p-2 bg-[#4D4D4D] bg-opacity-10  placeholder:text-[#808080] placeholder:text-[14px] rounded-lg"
                            />
                            <span
                                className="absolute right-3 top-[13px] w-4 text-gray-500 cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="bg-main-color w-full mt-6 text-white px-[32px] py-[12px] hover:bg-darker duration-300 ease-in-out rounded-[40px]"
                        onClick={handleSetNewPassword}
                    >
                        Perbarui Password
                    </button>
                </div>
            </div>
        )
    );
};

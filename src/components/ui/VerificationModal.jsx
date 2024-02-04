import React, { useState } from 'react';

export const VerificationModal = ({ show, onContinue, timer }) => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleContinue = () => {
        onContinue(verificationCode);
        setVerificationCode('');
    };

    return (
        show && (
            <div className="fixed inset-0 z-50 flex items-center backdrop-blur-sm justify-center">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="relative bg-white py-[60px] px-[80px] rounded-[40px]">
                    <h1 className='text-[#153060] text-[40px] leading-[52px]'>Verifikasi</h1>
                    <p className='my-8 text-[#828282]'>Masukkan 4 digit code yang dikirimkan ke e-mail Anda.</p>
                    <div className="flex justify-center gap-6 items-center">
                        {[1, 2, 3, 4].map((index) => (
                            <input
                                key={index}
                                type="text"
                                value={verificationCode[index - 1] || ''}
                                maxLength="1"
                                className="w-[64px] h-[56px] border mr-2 text-center"
                                onChange={(e) => {
                                    const updatedCode = [...verificationCode];
                                    updatedCode[index - 1] = e.target.value;
                                    setVerificationCode(updatedCode);
                                }}
                            />
                        ))}
                    </div>
                    <p className="text-[14px] text-center text-error text-base  my-6">{timer}s</p>
                    <button
                        type="button"
                        className="bg-main-color w-full mt-6 text-white px-[32px] py-[12px] hover:bg-darker duration-300 ease-in-out rounded-[40px]"
                        onClick={handleContinue}
                        disabled={timer === 0}
                    >
                        Lanjutkan
                    </button>
                    <p className='text-center my-8'>Tidak Menerima Kode? <span className='text-error'>Kirim Ulang</span></p>
                </div>
            </div>
        )
    );
};

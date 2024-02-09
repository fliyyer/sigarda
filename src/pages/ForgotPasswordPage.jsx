import React, { useState, useEffect } from 'react';
import LoginIcon from '../assets/icons/login.svg';
import Sigarda from '../assets/icons/sigarda.svg';
import { VerificationModal } from '../components/ui/VerificationModal';
import { NewPasswordModal } from '../components/ui/NewPasswordModal';

const ForgotPasswordPage = () => {
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSetNewPasswordModal, setShowSetNewPasswordModal] = useState(false);
    const [timer, setTimer] = useState(30);
    const [userEmail, setUserEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    useEffect(() => {
        let countdown;
        if (showVerificationModal && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => {
            clearInterval(countdown);
        };
    }, [showVerificationModal, timer]);

    const handleContinueVerification = () => {
        setTimeout(() => {
            setShowVerificationModal(false);
            setShowSetNewPasswordModal(true);
        }, 2000);
    };

    const handleSetNewPassword = () => {
        setTimeout(() => {
            setShowSetNewPasswordModal(false);
        }, 2000);
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-[#F6F8FF] px-[89px] py-12 flex items-center justify-center [@media(max-width:1000px)]:hidden">
                <img src={LoginIcon} alt="Sigarda" className="w-[442px] h-[532px]" />
            </div>
            <div className="w-1/2 bg-darker p-14 flex items-center justify-center [@media(max-width:1000px)]:w-full [@media(max-width:1000px)]:p-32">
                <form className="bg-[#fff] py-[80px] px-10 2xl:px-[60px] rounded-[40px]">
                    <img src={Sigarda} alt="Sigarda" className='w-[140px]' />
                    <h2 className="text-[40px] leading-[52px] text-[#153060] font-normal my-8">Lupa Password</h2>
                    <p className='text-base leading-[24px] tracking-[0.15px] text-[#828282]'>
                        Masukkan e-mail Anda untuk verifikasi, kami akan mengirimkan 4 digit code ke e-mail Anda.
                    </p>
                    <div className="mt-8">
                        <label htmlFor="email" className="text-[#333333] text-[15px] leading-[20px] tracking-[0.3px] font-normal">E-mail</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="ex.. monev@balmon.com"
                            className="w-full border bg-[#4D4D4D] bg-opacity-10  px-[32px] py-[12px] rounded-[40px]"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowVerificationModal(true)}
                        className="bg-main-color w-full mt-6 text-white px-[32px] py-[12px] hover:bg-darker duration-300 ease-in-out rounded-[40px]"
                    >
                        Lanjutkan
                    </button>
                    <VerificationModal
                        show={showVerificationModal}
                        onClose={() => setShowVerificationModal(false)}
                        onContinue={handleContinueVerification}
                        timer={timer}
                    />
                    <NewPasswordModal
                        show={showSetNewPasswordModal}
                        onClose={() => setShowSetNewPasswordModal(false)}
                        onSetNewPassword={handleSetNewPassword}
                    />
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;

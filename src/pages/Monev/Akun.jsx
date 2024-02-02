import React, { useState, useRef } from 'react';
import User from '../../assets/icons/user.png';
import ProfilCrop from '../../components/ui/ProfileCrop';

const Akun = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [isCropPopupOpen, setIsCropPopupOpen] = useState(false);
    const fileInputRef = useRef(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                openCropPopup();
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const openCropPopup = () => {
        setIsCropPopupOpen(true);
    };

    const closeCropPopup = () => {
        setIsCropPopupOpen(false);
    };

    const handleCropImage = (croppedImage) => {
        setProfileImage(croppedImage);
        closeCropPopup();
    };

    const handleSaveChanges = () => {
        // Save changes to local storage
        const userData = {
            profileImage,
            // Add other user data fields here
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Changes saved successfully!');
    };

    return (
        <div className="">
            {isCropPopupOpen && (
                <ProfilCrop
                    image={profileImage}
                    onSave={handleCropImage}
                    onCancel={closeCropPopup}
                />
            )}
            <h1 className="text-[#5E5E5E] text-2xl font-bold">Akun</h1>
            <p className="text-[#000000] bg-opacity-80 my-4">Pengaturan Akun</p>
            <hr />
            {/* info profil */}
            <div className="mt-8 max-w-[350px] px-4 py-3">
                <p className="text-[#000] font-semibold">Profil</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <label htmlFor='file-input' className="cursor-pointer">
                            {
                                profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt=""
                                        className="w-16 h-16"
                                    />
                                ) : (
                                    <img src={User} alt="" className="w-16 h-16" />
                                )}
                            <input
                                ref={fileInputRef}
                                id="file-input"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                        </label>
                        <div>
                            <p className="text-sm font-semibold">Monev</p>
                            <span className="text-xs">Admin</span>
                        </div>
                    </div>
                    <button className="bg-[#F4485D] rounded-[40px] hover:bg-red-600 duration-100 ease-out text-sm text-white px-6 h-10">
                        Logout
                    </button>
                </div>
                <p className="mt-[34px] text-sm font-semibold">Username</p>
                <input type="text" placeholder="Username" className="w-full p-2 border border-[#E5E5E5] py-3 rounded-md mt-2" />
                <p className="mt-[34px] text-sm font-semibold">Email</p>
                <input type="text" placeholder="Email" className="w-full p-2 border border-[#E5E5E5] py-3 rounded-md mt-2" />
                <p className="mt-[34px] text-sm font-semibold">Role</p>
                <select className="w-full p-2 border border-[#E5E5E5] py-3 rounded-md mt-2">
                    <option value="Monev">Monev</option>
                    <option value="TU">TU</option>
                    <option value="Pelayanan">Pelayanan</option>
                </select>
                <div className="flex mt-9 justify-end">
                    <button onClick={handleSaveChanges} className="bg-main-color rounded-[40px] hover:bg-blue-600 duration-100 ease-out text-sm text-white px-6 h-10">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Akun;

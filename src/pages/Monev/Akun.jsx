import React, { useState, useRef, useEffect } from 'react';
import ProfilCrop from '../../components/ui/ProfileCrop';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Akun = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [isCropPopupOpen, setIsCropPopupOpen] = useState(false);
    const fileInputRef = useRef(null);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        photo: '',
    });

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

    const profile = JSON.parse(sessionStorage.getItem('user_sigarda'));
    const fetchProfile = async () => {
        try {
            const response = await api.get(`/register.php?profile_id=${profile.id}`);
            if (response.data && response.data) {
                setUser({
                    id: response.data.id,
                    name: response.data.nama,
                    email: response.data.email,
                    photo: response.data.photo,
                });
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.log('Error fetching profile:', error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleSaveChanges = async () => {
        const updatedUser = {
            id: user.id,
            nama: user.name,
            email: user.email,
            photo: profileImage
        };
        try {
            const response = await api.put(`/register.php?id=${user.id}`, updatedUser);
            setUser(updatedUser);
            setProfileImage(null);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Profile updated successfully!',
            });
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Failed to save changes: ${error.message}`,
            });
        }
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('user_sigarda');
        navigate('/login');
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
                                        className="w-16 rounded-full"
                                    />
                                ) : (
                                    <img
                                        src={`http://api.sigarda.fliyyer.skom.id/photo_user/${user.photo}`}
                                        alt=""
                                        className="w-16 rounded-full"
                                    />
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
                            <p className="text-sm font-semibold">{user.name}</p>
                            <span className="text-xs">{user.name}</span>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="bg-[#F4485D] rounded-[40px] hover:bg-red-600 duration-100 ease-out text-sm text-white px-6 h-10">
                        Logout
                    </button>
                </div>
                <p className="mt-[34px] text-sm font-semibold">Username</p>
                <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="w-full p-2 border border-[#E5E5E5] py-3 rounded-md mt-2" />
                <p className="mt-[34px] text-sm font-semibold">Email</p>
                <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full p-2 border border-[#E5E5E5] py-3 rounded-md mt-2" />
                <p className="mt-[34px] text-sm font-semibold">Role</p>
                <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} className="w-full p-2 border border-[#E5E5E5] py-3 rounded-md mt-2">
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

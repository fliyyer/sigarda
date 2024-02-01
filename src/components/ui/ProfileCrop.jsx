import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';

const ProfilCrop = ({ image, onSave, onCancel }) => {
    const [preview, setPreview] = useState(null);

    const handleSave = (croppedImage) => {
        setPreview(croppedImage);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-50 z-50">
            <div className="bg-[#f4f4f4] p-4 w-96 rounded-lg shadow-lg">
                {image && (
                    <>
                        <div className="mb-4">
                            <Avatar
                                width={330}
                                height={330}
                                onCrop={handleSave}
                                onClose={onCancel}
                                label="Upload and Crop"
                                src={image}
                            />
                        </div>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button
                                className="bg-primary-color w-[90px] text-text-board-color px-5 py-2 rounded"
                                onClick={() => onSave(preview)}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-300 text-text-board-color w-[90px] px-5 py-2 rounded"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfilCrop;

import React, {useRef, useState} from 'react';
import Input from "./Input.jsx";

const ProfilePhotoSelector = () => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Update the image state
            setImage(file);

            //Generate preview URL form the file
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    }

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    }

    const onChooseFile = () => inputRef.current.click();


    return (
        <div className="flex justify-center mb-6">
            <Input type="file" ref={inputRef} accept="image/*"
            onChange={handleImageChange} className="hidden" />
        </div>
    );
};

export default ProfilePhotoSelector;
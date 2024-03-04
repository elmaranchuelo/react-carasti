import { useState } from 'react';
import './Profile.css'
import { BsCloudUpload } from "react-icons/bs";
const ProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(URL.createObjectURL(file));
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };


  return (
    <div className='profile-container'>
        <div className='photo-label'>
            <div>Your Photo</div>
            <div className='subtext'>This will be displayed on your Profile.</div>
        </div>
        <div className='photo-container'>
            {selectedPhoto && (
            <div className="profile-photo">
            <img src={selectedPhoto} alt="Selected" />
            </div>
        )}
        </div>
        <div className='input-container' onClick={handleIconClick}>
        <BsCloudUpload />
            <input type="file" id="fileInput" onChange={handlePhotoChange} accept="image/*" />
            <div>
                Click to upload image
            </div>
        </div>

    </div>
  );
};

export default ProfileScreen;

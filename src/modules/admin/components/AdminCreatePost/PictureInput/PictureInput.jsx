import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../../../../firebase';

function PictureInput({
  register, onProgressChange, onFileUpload, uploadFileFlag, setSelectedFile,
}) {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const uploadFile = () => {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`places/${file.name}`).put(file);
    uploadTask.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgressChange(progress);
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
        default:
          break;
      }
    }, (error) => {
      console.log(error);

      // Handle unsuccessful uploads
    }, () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        onFileUpload(downloadURL);
      });
    });
  };

  useEffect(() => {
    if (uploadFileFlag) {
      console.log('uploading');

      uploadFile();
    }
  }, [uploadFileFlag]);

  return (
    <>
      <input
        onChange={handleFileChange}
        ref={register({
          required: 'Campo requerido',
        })}
        name="file"
        multiple
        type="file"
        style={{ display: 'none' }}
      />
    </>
  );
}

PictureInput.propTypes = {
  register: PropTypes.func.isRequired,
  onProgressChange: PropTypes.func.isRequired,
  onFileUpload: PropTypes.func.isRequired,
  setSelectedFile: PropTypes.func.isRequired,
  uploadFileFlag: PropTypes.bool.isRequired,
};

export default PictureInput;

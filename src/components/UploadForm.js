import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({}) => {
  const [file, setFile] = useState('');

  function onSubmit() {
    return axios
      .post('http://localhost:5000/api/photo', {
        photo: file
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <form>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile" />
        <label
          className="custom-file-label"
          htmlFor="customFile"
          onChange={event => {
            const f = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
              // The file's text will be printed here
              let binaryData = e.target.result;
              let base64String = window.btoa(binaryData);
              setFile(base64String);
            };
            reader.readAsBinaryString(f);
          }}
        >
          Choose file
        </label>
      </div>
    </form>
  );
};

export default UploadForm;

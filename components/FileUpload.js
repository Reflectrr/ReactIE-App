'use client';

import React, { useState, useEffect } from "react";

export default function FileUpload() {
  const [inputElement, setInputElement] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  useEffect(() => {
    setInputElement(document.getElementById("input-elem"));
  }, []);


  const onFileChange = event => {
    setFile(event.target.files[0])
    setUploadedFileName(event.target.files[0].name)
  };

  const handleUpload = () => {
    inputElement?.click();
  };

  if (file) {
    const formData = new FormData();
    formData.append(
      "myFile",
      file,
      file.name
    );

    console.log(file);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  }

  return (
    <div className="my-3">
      <label className="me-3">Choose file: </label>
      <input id="input-elem" className="d-none" type="file" onChange={onFileChange} />
      <button onClick={handleUpload} className='btn btn-outline-primary'>
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </div>
  );
}


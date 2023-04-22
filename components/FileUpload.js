"use client";

import React, { useState, useEffect } from "react";
import { send_file } from "@/utils/service";

export default function FileUpload({ text, setText, filename, setFilename }) {
    const [inputElement, setInputElement] = useState(null);

    useEffect(() => {
        setInputElement(document.getElementById("input-elem"));
    }, []);

    const onFileChange = async (event) => {
        let newFile = event.target.files[0];
        setFilename(newFile.name);
        const text = await send_file(newFile);
        setText(text);
    };

    const handleUpload = () => {
        inputElement?.click();
    };

    return (
        <div className="my-3">
            <label className="me-3">Choose file: </label>
            <input
                id="input-elem"
                className="d-none"
                type="file"
                onChange={onFileChange}
            />
            <button
                onClick={handleUpload}
                className="btn btn-outline-primary me-3"
            >
                {filename ? filename : "Upload"}
            </button>
            {filename && !text && (
                <div className="d-flex justify-content-center">
                    <span>parsing...</span>
                </div>
            )}
        </div>
    );
}

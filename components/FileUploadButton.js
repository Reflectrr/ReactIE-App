"use client";

import { useReactIEStore } from "@/utils/store";
import { usePDFToTextStore } from "@/utils/store";
import React, { useState, useEffect } from "react";
import { send_file } from "@/utils/service";

export default function FileUploadButton() {
    // grab states from store
    const filename = usePDFToTextStore((state) => state.filename);
    const parsing = usePDFToTextStore((state) => state.parsing);
    // grab actions from store
    const setText = usePDFToTextStore((state) => state.setText);
    const setFile = usePDFToTextStore((state) => state.setFile);
    const setFilename = usePDFToTextStore((state) => state.setFilename);
    const setParsing = usePDFToTextStore((state) => state.setParsing);
    const setReactions = useReactIEStore((state) => state.setReactions);
    // grab input element
    const [inputElement, setInputElement] = useState(null);

    useEffect(() => {
        setInputElement(document.getElementById("input-elem"));
    }, []);

    const onFileChange = async (event) => {
        let newFile = event.target.files[0];
        // update store
        setReactions(null);
        setText(null);
        setFile(newFile);
        setFilename(newFile.name);
        setParsing(true);
        const text = await send_file(newFile);
        setParsing(false);
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
            {parsing && (
                <div className="d-flex justify-content-center">
                    <span>parsing...</span>
                </div>
            )}
        </div>
    );
}

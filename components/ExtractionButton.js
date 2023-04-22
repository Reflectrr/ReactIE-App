"use client";

import { useState } from "react";
import { get_extraction } from "@/utils/service";

export default function ExtractionButton({ setReactions, text, filename }) {
    const [clicked, setClicked] = useState(false);
    if (!text) return null;
    const onClick = async () => {
        setClicked(true);
        const res = await get_extraction(filename);
        setClicked(false);
        setReactions(res);
        console.log(res);
    };
    return (
        <>
            <div className="my-3 d-flex justify-content-center">
                <button onClick={onClick} className="btn btn-outline-primary">
                    Start Extraction!
                </button>
            </div>
            {clicked && (
                <div className="d-flex justify-content-center">
                    Extracting... (This may take a minute or two)
                </div>
            )}
        </>
    );
}

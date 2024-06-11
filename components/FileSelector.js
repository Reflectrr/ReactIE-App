"use client";

import { useReactIEStore } from "@/utils/store";
import React from "react";

export default function FileSelector() {
    // grab states from store
    const filename = useReactIEStore((state) => state.filename);
    // grab actions from store
    const setFilename = useReactIEStore((state) => state.setFilename);

    const decrementFilename = () => {
        const index = parseInt(filename.match(/\d+/)[0]);
        let decrementedIndex = index - 1;
        if (decrementedIndex < 2) {
            decrementedIndex = 10;
        }
        setFilename(`Paper${decrementedIndex}.json`);
    }

    const incrementFilename = () => {
        const index = parseInt(filename.match(/\d+/)[0]);
        let incrementedIndex = index + 1;
        if (incrementedIndex > 10) {
            incrementedIndex = 2;
        }
        setFilename(`Paper${incrementedIndex}.json`);
    }

    return (
        <div className="m-3 d-flex align-items-center">
        <button className="btn btn-outline-primary me-3" onClick={() => decrementFilename()}>Previous Paper</button>
        <span className="me-3 flex-grow-1 text-center">Current Paper: {filename}</span>
        <button className="btn btn-outline-primary me-3" onClick={() => incrementFilename()}>Next Paper</button>
        </div>);
        
}
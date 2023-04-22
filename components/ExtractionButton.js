"use client";

import { get_extraction } from "@/utils/service";
import { useReactIEStore, usePDFToTextStore } from "@/utils/store";

export default function ExtractionButton() {
    // grab state from stores
    const text = usePDFToTextStore((state) => state.text);
    const filename = usePDFToTextStore((state) => state.filename);
    const extracting = useReactIEStore((state) => state.extracting);
    // grab actions from store
    const setReactions = useReactIEStore((state) => state.setReactions);
    const setExtracting = useReactIEStore((state) => state.setExtracting);

    // render nothing if no text
    if (!text) return null;

    const onClick = async () => {
        setExtracting(true);
        const res = await get_extraction(filename);
        setExtracting(false);
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
            {extracting && (
                <div className="d-flex justify-content-center">
                    Extracting... (This may take a minute or two)
                </div>
            )}
        </>
    );
}

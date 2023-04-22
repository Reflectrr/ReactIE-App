"use client";

import { get_extraction } from "@/utils/service";
import { useReactIEStore, usePDFToTextStore } from "@/utils/store";

export default function ExtractionButton() {
    // grab state from stores
    const text = usePDFToTextStore((state) => state.text);
    const filename = usePDFToTextStore((state) => state.filename);
    const extracting = useReactIEStore((state) => state.extracting);
    const reactions = useReactIEStore((state) => state.reactions);
    // grab actions from store
    const setReactions = useReactIEStore((state) => state.setReactions);
    const setExtracting = useReactIEStore((state) => state.setExtracting);

    // render nothing if no text
    if (!text) return null;
    if (reactions) return null;

    const onClick = async () => {
        setExtracting(true);
        const res = await get_extraction(filename);
        setExtracting(false);
        setReactions(res);
        console.log(res);
    };
    return (
        <>
            <h1 className="h3">
                Step 2: Review Text Content Above and Start Extraction
            </h1>
            {!extracting && (
                <>
                    <div className="justify-content-center d-flex">
                        <button
                            onClick={onClick}
                            className="btn btn-outline-primary"
                        >
                            Extract Chemical Reactions!
                        </button>
                    </div>
                </>
            )}
            {extracting && (
                <>
                    <div className="my-3 d-flex justify-content-center">
                        Extracting chemical reactions from text... (This takes
                        about a minute)
                        <br />
                        After extraction is completed, tables containing
                        chemical reaction information will be displayed below.
                    </div>
                </>
            )}
        </>
    );
}

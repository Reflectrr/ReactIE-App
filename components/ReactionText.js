"use client";

import { useState } from "react";

export default function ReactionText({ text, index }) {
    if (!text) return null;
    const [open, setOpen] = useState(false);
    return (
        <>
            <tr key={`reaction-entry-${index}-text}`}>
                <th>text</th>
                <td>
                    {open ? (
                        <>
                            {text}
                            <div>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    hide text
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {text.split(" ").slice(0, 15).join(" ") + "...  "}
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                show more
                            </button>
                        </>
                    )}
                </td>
            </tr>
        </>
    );
}

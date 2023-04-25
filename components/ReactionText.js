"use client";

import { useState } from "react";

export default function ReactionText({ text, index }) {
    if (!text) return null;
    const [open, setOpen] = useState(false);
    return (
        <>
            <tr key={`reaction-entry-${index}-text}`}>
                <th>
                    <img
                        src={"/text.png"}
                        alt=""
                        style={{
                            width: "20px",
                            height: "20px",
                        }}
                        className="me-2"
                    />
                    <span>Source text</span>
                </th>
                <td>
                    {open ? (
                        <>
                            <span onClick={() => setOpen(!open)}>{text}</span>
                            <div>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                >
                                    hide text
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <span onClick={() => setOpen(!open)}>
                                {text.split(" ").slice(0, 15).join(" ") +
                                    "...  "}
                            </span>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    setOpen(!open);
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

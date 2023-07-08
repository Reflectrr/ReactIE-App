"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReactionText({ text, index }) {
    const [open, setOpen] = useState(false);
    if (!text) return null;
    return (
        <>
            <tr key={`reaction-entry-${index}-text}`}>
                <th>
                    <Image
                        width={20}
                        height={20}
                        src={"/text.png"}
                        alt=""
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

"use client";

import { Table } from "react-bootstrap";
import ReactionText from "./ReactionText";

export default function ReactionTable({ reaction, index }) {
    if (!reaction) return null;
    const reactionEntries = Object.entries(reaction);

    return (
        <>
            <div>
                <span className="d-flex justify-content-center">
                    Reaction #{index}
                </span>
                <Table striped bordered hover>
                    <tbody>
                        {
                            // parse each pair of reaction information into a table row
                            reactionEntries.map(([key, val]) => {
                                if (key == "text") {
                                    return (
                                        <ReactionText
                                            text={val}
                                            index={index}
                                        />
                                    );
                                }
                                return (
                                    <tr key={`reaction-entry-${index}-${key}`}>
                                        <th>{key}</th>
                                        <td>{val}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                <div style={{ height: "50px" }}></div>
            </div>
        </>
    );
}

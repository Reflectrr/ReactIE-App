"use client";

import { Table } from "react-bootstrap";
import ReactionText from "./ReactionText";

export default function ReactionTable({ reaction, index }) {
    if (!reaction) return null;
    const reactionEntries = Object.entries(reaction);
    const order = [
        "product",
        "reactants",
        "reaction type",
        "catalyst",
        "solvent",
        "temperature",
        "time",
        "yield",
        "text",
    ];
    return (
        <>
            <span className="d-flex justify-content-center">
                Reaction #{index}
            </span>
            <Table striped bordered hover>
                <tbody>
                    {
                        // parse each pair of reaction information into a table row
                        order.map((key) => {
                            if (reaction.hasOwnProperty(key)) {
                                if (key == "text") {
                                    return (
                                        <ReactionText
                                            key={`reaction-entry-${index}-text`}
                                            text={reaction[key]}
                                            index={index}
                                        />
                                    );
                                }
                                return (
                                    <tr key={`reaction-entry-${index}-${key}`}>
                                        <th>{key}</th>
                                        <td>{reaction[key]}</td>
                                    </tr>
                                );
                            }
                        })
                    }
                </tbody>
            </Table>
            <div style={{ height: "50px" }}></div>
        </>
    );
}

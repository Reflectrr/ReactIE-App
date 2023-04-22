"use client";

import { Table } from "react-bootstrap";
import ReactionText from "./ReactionText";

export default function ReactionTable({ reaction, index }) {
    if (!reaction) return null;
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
                <img
                    src={index % 2 ? "/reaction.png" : "/reaction2.png"}
                    alt=""
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                    className="me-2"
                />
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
                                        <th>
                                            <img
                                                src={`/${key.replace(
                                                    " ",
                                                    "_"
                                                )}.png`}
                                                alt=""
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                }}
                                                className="me-2"
                                            />
                                            {key}
                                        </th>
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

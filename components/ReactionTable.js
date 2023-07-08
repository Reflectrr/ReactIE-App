"use client";

import { Table } from "react-bootstrap";
import ReactionText from "./ReactionText";
import Image from "next/image";

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
                <Image
                    src={index % 2 ? "/reaction.png" : "/reaction2.png"}
                    alt=""
                    height={30}
                    width={30}
                    className="me-2"
                />
                <h2 className="h4">Reaction #{index}</h2>
            </span>

            <Table bordered striped hover className="mb-5">
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
                                            <Image
                                                src={`/${key.replace(
                                                    " ",
                                                    "_"
                                                )}.png`}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="me-2"
                                            />
                                            <span>
                                                {key.charAt(0).toUpperCase() +
                                                    key.slice(1)}
                                            </span>
                                        </th>
                                        <td>{reaction[key]}</td>
                                    </tr>
                                );
                            }
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

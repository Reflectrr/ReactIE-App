"use client";

import { Table } from "react-bootstrap";
import ReactionText from "./ReactionText";
import Image from "next/image";

export default function ReactionTable({ reaction, index }) {
    if (!reaction) return null;
    const reactionInfo = reaction.reactionInfo;
    const reactionText = reaction.reactionText;
    const order = [
        "Product",
        "Reactant",
        "Catalyst",
        "Workup reagents",
        "Solvent",
        "Temperature",
        "Atmosphere",
        "Reaction type",
        "Time",
        "Pressure",
        "PH",
        "Time to completion",
        "Yield",
        "Text",
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
                            if (key == "Text") {
                                return (
                                    <ReactionText key={`reaction-entry-${index}-text`} text={reactionText} index={index} />
                                );
                            }
                            if (reactionInfo.hasOwnProperty(key)) {
                                return (
                                    <tr key={`reaction-entry-${index}-${key}`}>
                                        <th>
                                            {/* <Image
                                                src={`/${key.replace(
                                                    " ",
                                                    "_"
                                                )}.png`}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="me-2"
                                            /> */}
                                            <span>
                                                {key.charAt(0).toUpperCase() +
                                                    key.slice(1)}
                                            </span>
                                        </th>
                                        <td>{reactionInfo[key]}</td>
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

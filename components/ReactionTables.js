"use client";

import ReactionTable from "./ReactionTable";
import { Row, Col } from "react-bootstrap";
import { useReactIEStore } from "@/utils/store";

export default function ReactionTables() {
    const reactions = useReactIEStore((state) => state.reactions);
    if (!reactions) return null;
    const singleReactions = [];
    for (let i = 0; i < reactions.length; i++) {
        let numberOfReactions = reactions[i].reactions.length;
        for (let j = 0; j < numberOfReactions; j++) {
            singleReactions.push(
                {
                    "reactionInfo": reactions[i].reactions[j],
                    "reactionText": reactions[i].text
                });
        }
    }

    console.log("singleReactions", singleReactions);

    return (
        <>
            <h1 className="h3 mb-3">Results from Extraction:</h1>
            <Row>
                {singleReactions.map((reaction, reactionIndex) => {
                    // iterate over each reaction in the array
                    reactionIndex += 1;
                    return (
                        <Col
                            key={`reaction-table-${reactionIndex}-table`}
                            sm={12}
                            md={6}
                            lg={4}
                        >
                            <ReactionTable
                                reaction={reaction}
                                index={reactionIndex}
                            />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

"use client";

import ReactionTable from "./ReactionTable";
import { Row, Col } from "react-bootstrap";

export default function ReactionTables({ reactions }) {
    if (!reactions) return null;
    return (
        <>
            <Row>
                {reactions.map((reaction, reactionIndex) => {
                    // iterate over each reaction in the array
                    reactionIndex += 1;
                    return (
                        <Col sm={12} md={6} lg={4}>
                            <ReactionTable
                                reaction={reaction}
                                index={reactionIndex}
                                key={`reaction-table-${reactionIndex}-all`}
                            />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

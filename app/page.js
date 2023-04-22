"use client";

import MyAppbar from "@/components/Navbar";
import ExtractionButton from "@/components/ExtractionButton";
import FileUpload from "@/components/FileUpload";
import ReactionTables from "@/components/ReactionTables";
import TextArea from "@/components/TextArea";
import { Container } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
    const [reactions, setReactions] = useState([]); // stores extracted chemical reactions
    const [text, setText] = useState(null); // stores text after PDF Conversion
    const [filename, setFilename] = useState(null);
    return (
        <>
            <MyAppbar />
            <Container>
                <FileUpload
                    text={text}
                    setText={setText}
                    setFilename={setFilename}
                    filename={filename}
                />
                <TextArea text={text} />
                <ExtractionButton
                    setReactions={setReactions}
                    filename={filename}
                    text={text}
                />
                <ReactionTables reactions={reactions} />
            </Container>
        </>
    );
}

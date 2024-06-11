"use client";

import ExtractionButton from "@/components/ExtractionButton";
import FileUploadButton from "@/components/FileUploadButton";
import ReactionTables from "@/components/ReactionTables";
import TextArea from "@/components/TextArea";
import { Container } from "react-bootstrap";
import FileSelector from "@/components/FileSelector";

export default function Home() {
    return (
        <>
            <Container>
                {/* <FileUploadButton /> */}
                {/* <TextArea /> */}
                {/* <ExtractionButton /> */}
                <FileSelector />
                <ReactionTables />
            </Container>
        </>
    );
}

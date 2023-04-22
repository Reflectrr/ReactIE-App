"use client";

import MyAppbar from "@/components/Navbar";
import ExtractionButton from "@/components/ExtractionButton";
import FileUpload from "@/components/FileUpload";
import ReactionTables from "@/components/ReactionTables";
import TextArea from "@/components/TextArea";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <MyAppbar />
            <Container>
                <FileUpload />
                <TextArea />
                <ExtractionButton />
                <ReactionTables />
            </Container>
        </>
    );
}

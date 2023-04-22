import { FormControl } from "react-bootstrap";

export default function TextArea({ text }) {
    if (text) {
        return (
            <FormControl
                as="textarea"
                rows={10}
                placeholder="Enter text here"
                value={text}
                style={{ height: "35vh" }}
            />
        );
    }
}

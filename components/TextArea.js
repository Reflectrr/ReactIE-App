import { FormControl } from "react-bootstrap";
import { usePDFToTextStore } from "@/utils/store";

export default function TextArea() {
    const text = usePDFToTextStore((state) => state.text);
    if (!text) return null;
    return (
        <FormControl
            as="textarea"
            rows={10}
            placeholder="Enter text here"
            value={text}
            style={{ height: "35vh" }}
            className="my-3"
            readOnly
        />
    );
}

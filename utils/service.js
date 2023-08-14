import axios from "axios";

const base_url = process.env.URL || "https://ec2-3-82-141-249.compute-1.amazonaws.com/";
console.log(base_url)

export async function get_extraction(filename) {
    if (!filename) {
        return null;
    }
    const jsonFilename = filename.replace(".pdf", ".json");
    const res = await axios.get(`${base_url}/extraction`, {
        params: {
            filename: jsonFilename,
        },
    });
    console.log(res.data);
    return res.data;
}

// create an async function to send the file to the backend and get parsed
export async function send_file(file) {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file, file.name);

    // Request made to the backend api
    // Send formData object
    const res = await axios.post(`${base_url}/parse`, formData);
    console.log(res.data);
    return res.data["fullText"];
}

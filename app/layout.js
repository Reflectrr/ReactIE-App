import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "ReactIE",
    description: "Chemical Reaction Extraction from Papers",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}

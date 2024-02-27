import "./globals.css";
import Header from "@/Components/Header";
export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {props.children}</body>
    </html>
  );
}

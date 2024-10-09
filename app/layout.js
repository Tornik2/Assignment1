import Header from "./components/Header/Header"; // Import your Header component
import "./App.css";
import "./index.css";
export const metadata = {
  title: "APP",
  description: "A brief description",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}

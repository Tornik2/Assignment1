import Header from "./components/Header/Header"; // Import  Header component
import Footer from "./components/Footer/Footer"; // Import  Footer component
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
        <div className="app">
          <Header />
          <div className="main__padding__sides">
            <main className="no-scrollbar">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

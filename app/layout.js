import Header from "./components/Header/Header"; // Import  Header component
import Footer from "./components/Footer/Footer"; // Import  Footer component
import { UserProvider } from "@auth0/nextjs-auth0/client";

import "./App.css";
import "./index.css";
export const metadata = {
  title: "APP",
  description: "A brief description",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <div className="app no-scrollbar">
            <Header />
            <main className="no-scrollbar main__padding__sides">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </UserProvider>
    </html>
  );
}

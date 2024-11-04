import Header from "./components/Header/Header"; // Import  Header component
import Footer from "./components/Footer/Footer"; // Import  Footer component
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "./components/ThemeProvider";

import "./App.css";
import "./index.css";
export const metadata = {
  title: "APP",
  description: "A brief description",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="dark">
      <ThemeProvider>
        <UserProvider>
          <body>
            <div className="app no-scrollbar">
              <Header />
              <main className="no-scrollbar main__padding__sides dark:text-gray-100 dark:bg-gray-600">
                {children}
              </main>
              <Footer />
            </div>
          </body>
        </UserProvider>
      </ThemeProvider>
    </html>
  );
}

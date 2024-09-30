import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export function Layout() {
  return (
    <div className="app">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

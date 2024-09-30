import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Assignment1 } from "./components/Assignment1";
import { Content } from "./components/Main/MainContent";
import { Layout } from "./components/Layout";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Assignment1 />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

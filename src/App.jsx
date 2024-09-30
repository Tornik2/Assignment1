import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Content } from "./components/Main/MainContent";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Content />
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

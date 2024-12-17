import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import StepsPage from "./pages/StepsPage";
import WatchTimePage from "./pages/WatchTimePage";
import CombinedPage from "./pages/CombinedPage";

const App = () => {
  const styles = {
    app: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
    },
  };

  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/step-analysis" element={<StepsPage />} />
          <Route path="/watch-time" element={<WatchTimePage />} />
          <Route path="/combined" element={<CombinedPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TebakHiragana from "./Pages/Game";
import Sidebar from "./components/Sidebar";
import HurufHiragana from "./components/HurufHiragana";

function App() {
  return (
    <Router>
      <div className="flex"> {/* Ini kunci agar sejajar ke samping */}
        <Sidebar />
        <main className="flex-1 p-10 h-screen overflow-y-auto bg-slate-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<TebakHiragana />} />
            <Route path="/tabel" element={<HurufHiragana />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
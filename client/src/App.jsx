import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { logo } from "./assets";
import { CreatePost, Home } from "./pages";

const App = () => {
  return (
    <Router>
      <header className=" w-full flex justify-between items-center sm:px-8 px-4 py-4 border-b bg-slate-400 border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="LOGO" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md "
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-slate-300 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

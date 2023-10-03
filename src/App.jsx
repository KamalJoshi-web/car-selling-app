import React from "react";
import SearchCars from "./components/SearchCars";
import Cars from "./components/Cars";
import Searched from "./components/Searched";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Router>
        <SearchCars />
        <Routes>
          <Route path="/">
            <Route index element={<Cars />}></Route>
            <Route path="cars/:pageNumber" element={<Cars />} />
          </Route>
          <Route path="/cars/:pageNumber" component={<Cars />} />
          <Route path="/searched/:id">
            <Route index element={<Searched />}></Route>
            <Route path=":pageNumber" element={<Searched />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
};

export default App;

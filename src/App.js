import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import {  Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
     
    </div>
  );
}

export default App;

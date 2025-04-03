import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Home/Homepage";
import Navbar from "./GlobalComponents/Navbar";
import Footer from "./GlobalComponents/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

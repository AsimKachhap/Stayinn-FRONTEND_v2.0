import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

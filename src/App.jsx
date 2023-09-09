import LandPage from "./NewLandingPage/LandPage";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Platform from "./Platform/Platform";
function App() {
  return (
    <div className="App">
      <ToastContainer className="text-2xl" />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/home" element={<Platform />} />
      </Routes>
    </div>
  );
}

export default App;

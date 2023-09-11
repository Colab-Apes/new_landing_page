import LandPage from "./NewLandingPage/LandPage";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Platform from "./Platform/Platform";
import { Legality, Privacy, TermsOfUse } from "./pages";


function App() {
  return (
    <div className="App">
      <ToastContainer className="text-2xl" />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/home" element={<Platform />} />
        <Route path="/legal" element={<Legality />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
      </Routes>
    </div>
  );
}

export default App;

import LandPage from "./NewLandingPage/LandPage";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Platform from "./Platform/Platform";
import ProtectedRoute from "./Validation/ProtectedRoute";
import { Waitlist, NotFound, Legality, Privacy, TermsOfUse } from "./pages";
import Project from "./Platform/sections/project/Project";

function App() {
  return (
    <div className="App">
      <ToastContainer className="text-2xl" />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Platform />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />

        <Route path="/project" element={<Project />} />

        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/legal" element={<Legality />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
      </Routes>
    </div>
  );
}

export default App;

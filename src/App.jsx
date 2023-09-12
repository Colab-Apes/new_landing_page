import LandPage from "./NewLandingPage/LandPage";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Platform from "./Platform/Platform";
import ProtectedRoute from "./Validation/ProtectedRoute";
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

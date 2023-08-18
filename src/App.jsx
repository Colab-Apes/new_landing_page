import LandPage from "./NewLandingPage/LandPage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer className="text-2xl" />
      <LandPage />
    </div>
  );
}

export default App;

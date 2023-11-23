import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Background, Hero, Navbar, Socials } from "./components";

const Waitlist = () => {

  return (
    <main>

      <div className="sm:px-0 px-[1.75rem] sm:w-[33rem] md:w-screen md:px-[1.75rem] min-h-screen lg:h-screen lg:w-screen bg-no-repeat font-lato bg-cover">

        {/* This signup is a modal */}
        <ToastContainer />

        {/* Background Component */}
        <Background />

        {/* Navigation Bar Component */}
        <Navbar />

        {/* Hero Component */}
        <Hero />

        {/* Socials Component for lg screen  */}
        <div className="w-full lg:block hidden">
          <Socials />
        </div>

      </div>

    </main>
  )
}

export default Waitlist
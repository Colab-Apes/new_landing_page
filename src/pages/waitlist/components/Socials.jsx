import instagram from "../../../assets/socials/instagram.svg";
import twitter from "../../../assets/socials/twitter.svg";
import linkedin from "../../../assets/socials/linkedin.svg";

const Socials = () => {
  return (
    <div className="flex w-full pr-14 md:h-[10vh] lg:min-h-[10vh] items-center justify-center lg:justify-end gap-x-3">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/co_labapes"
        className="border-[#3B8004] h-[4rem] w-[4rem] hover:scale-125  ease-in-out  duration-300 rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="" />
      </a>

      {/* Twitter */}
      <a
        href="https://www.twitter.com/co_labapes"
        className="border-[#3B8004] h-[4rem] w-[4rem] hover:scale-125  ease-in-out duration-300 rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/"
        className="border-[#3B8004] h-[4rem] w-[4rem] hover:scale-125  ease-in-out duration-300 rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
};

export default Socials;
import { Foot } from "../NewLandingPage/sections";
import Nav from "../NewLandingPage/components/Nav";
import line from "./assets/line.svg";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    const safeDocument = typeof document !== "undefined" ? document : {};
    const { body } = safeDocument;
    body.style.overflow = "";
  }, []);
  return (
    <main className=" bg-[#fff] ">
      <Nav />
      <section className=" text-[#333] font-lato pt-[14.5rem] px-[10.25rem] ">
        <h4 className=" text-[2.5rem] font-bold ">
          Co_lab Apes Privacy Policy
        </h4>
        <p className=" text-[1.5rem] font-400 mt-[1.94rem] ">
          Effective Date: 8/10/2023
        </p>
        <img src={line} alt="line" className=" mt-[1.75rem] " />

        <p className=" text-[1rem]/[1.5rem] font-400 mt-[5.44rem] ">
          <b>1. Introduction</b> <br />
          Welcome to Co_lab Apes, a collaborative platform that values your
          privacy and data security. This Privacy Policy outlines how we
          collect, use, disclose, and protect your personal information when you
          use our platform and services. Please read this Privacy Policy
          carefully to understand how we handle your data.
          <br /> <br />
          <b>2. No Legal Advice</b> <br />
          <b>Account Information:</b> When you create an account, we collect
          your name, email address, and profile information.
          <br />
          <b>User Content:</b> We store the content you generate and share on
          Co_lab Apes, including posts, comments, messages, and project details.
          <br />
          <b>Usage Data:</b> We collect data on your interactions with the
          platform, such as your activity, projects, and the content you view.
          <br />
          <b>Device Information:</b> Information about the device and browser
          you use to access Co_lab Apes, including IP address and location data.
          <br />
          <b>Cookies and Analytics:</b> We use cookies and analytics tools to
          enhance your experience and gather insights into platform usage.
          <br />
          <br />
          <b>3. How We Use Your Information</b> <br />
          We use your information for the following purposes:
          <br />
          <b>Platform Operation:</b> To provide, maintain, and improve Co_lab
          Apes, including user support and troubleshooting.
          <br />
          <b>Communication:</b> To send you platform updates, notifications, and
          marketing materials based on your preferences.
          <br />
          <b>Community Building:</b> To foster a vibrant community on Co_lab
          Apes by connecting like-minded individuals.
          <br />
          <b>Research and Analytics:</b> To analyze user data and improve our
          platform, services, and educational offerings.
          <br /> <br />
          <b>4. Sharing Your Information</b> <br />
          Your information may be shared as follows:
          <br />
          <b>Public Content:</b> Some of your information, such as user content,
          may be visible to other users as part of our collaborative platform.
          <br />
          <b>Service Providers:</b> We may share your information with
          third-party service providers who assist us in platform operation and
          improvement.
          <br />
          <b>Legal Compliance:</b> We may disclose your information to comply
          with legal obligations, protect our rights, and respond to lawful
          requests.
          <br /> <br />
          <b>5. Your Choices</b> <br />
          You can manage your privacy settings and preferences within your
          Co_lab Apes account. You also have the option to opt out of receiving
          promotional emails from us.
          <br /> <br />
          <b>6. Data Security</b> <br />
          While we implement measures to safeguard your data, no online platform
          is entirely immune to security risks. We urge you to exercise caution
          when sharing personal information.
          <br /> <br />
          <b>7. Changes to this Policy</b> <br />
          Co_lab Apes reserves the right to update this Privacy Policy to
          reflect changes in our practices. Please check back periodically to
          stay informed.
          <br /> <br />
          <b>8. Contact Us</b> <br />
          If you have questions or concerns about this Privacy Policy, please
          contact us at help@colabapes.com
          <br /> <br />
          <b>9. Consent</b> <br />
          By using Co_lab Apes, you agree to the terms of this Privacy Policy
          and our Terms of Use.
          <br /> <br />
          Thank you for choosing Co_lab Apes for your collaborative endeavors.
        </p>
      </section>
      <div className="px-4  md:px-14 lg:px-[10.25rem]">
      <Foot />
      </div>
    </main>
  );
};

export default Privacy;

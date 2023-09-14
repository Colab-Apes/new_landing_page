import { Foot } from "../NewLandingPage/sections";
import Nav from "../NewLandingPage/components/Nav";
import line from "./assets/line.svg";
import { useEffect } from "react";

const TermsOfUse = () => {
  useEffect(() => {
    const safeDocument = typeof document !== "undefined" ? document : {};
    const { body } = safeDocument;
    body.style.overflow = "";
  }, []);
  return (
    <main className=" bg-[#fff] ">
      <Nav />
      <section className=" text-[#333] font-lato pt-[14.5rem] px-[10.25rem] ">
        <h4 className=" text-[2.5rem] font-bold ">Co_lab Apes Terms of Use</h4>
        <p className=" text-[1.5rem] font-400 mt-[1.94rem] ">
          Effective Date: 8/10/2023
        </p>
        <img src={line} alt="line" className=" mt-[1.75rem] " />

        <p className=" text-[1rem]/[1.5rem] font-400 mt-[5.44rem] ">
          <b>1. Acceptance of Terms</b> <br />
          Welcome to Co_lab Apes, a collaborative platform dedicated to
          empowering creators. By accessing or using Co_lab Apes, you agree to
          comply with and be bound by these Terms of Use. If you do not agree
          with these terms, please do not use our platform.
          <br /> <br />
          <b>2. Platform Usage</b> <br />
          You agree to use Co_lab Apes responsibly and abide by the following
          guidelines:
          <br />
          <b>Eligibility:</b> You must be at least 13 years old to use Co_lab
          Apes. If you are under 18, you must have parental or guardian consent.
          <br />
          <b>User Account:</b> You are responsible for maintaining the
          confidentiality of your account credentials and ensuring their proper
          use. You agree not to share your account or access credentials.
          <br />
          <b>User Content:</b> By posting or sharing content on Co_lab Apes, you
          grant us a non-exclusive, worldwide, royalty-free license to use,
          modify, and display your content in connection with the platform.
          <br /> <br />
          <b>3. Code of Conduct</b> <br />
          You agree to use Co_lab Apes responsibly and abide by the following
          guidelines:
          <br />
          - Respect other users' privacy and rights.
          <br />
          - Do not engage in hate speech, harassment, or any form of harmful
          behavior.
          <br />
          - Do not upload, post, or share content that violates intellectual
          property rights or any applicable laws.
          <br />
          <br />
          <b>4. Intellectual Property</b> <br />
          Co_lab Apes and its content, features, and functionality are protected
          by copyright, trademark, and other intellectual property laws. You may
          not reproduce, distribute, modify, or create derivative works based on
          our platform without explicit permission.
          <br /> <br />
          <b>5. Privacy</b> <br />
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and protect your personal information.
          <br /> <br />
          <b>6. Disclaimers and Limitation of Liability</b> <br />
          Co_lab Apes is provided "as is" and "as available" without warranties
          of any kind, whether express or implied. We are not responsible for
          any content posted by users and disclaim liability for any loss or
          damage arising from your use of the platform.
          <br /> <br />
          <b>7. Termination</b> <br />
          We reserve the right to terminate or suspend your account and access
          to Co_lab Apes for violations of these Terms of Use or any other
          reason we deem necessary.
          <br /> <br />
          <b>8. Changes to Terms</b> <br />
          Co_lab Apes may revise these Terms of Use at any time. Please check
          this page periodically for updates.
          <br /> <br />
          <b>9. Governing Law</b> <br />
          These Terms of Use are governed by and construed in accordance with
          the laws of [Jurisdiction]. Any disputes arising from these terms will
          be subject to the exclusive jurisdiction of the courts in
          [Jurisdiction].
          <br /> <br />
          <b>10. Contact Us</b> <br />
          If you have questions or concerns about these Terms of Use, please
          contact us at help@colabapes.com
          <br /> <br />
          <b>11. Consent</b> <br />
          By using Co_lab Apes, you agree to these Terms of Use and all
          applicable laws and regulations.
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

export default TermsOfUse;

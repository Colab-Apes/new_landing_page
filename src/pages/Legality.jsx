import { Foot } from "../NewLandingPage/sections";
import Nav from "../NewLandingPage/components/Nav";
import line from "./assets/line.svg";
import { useEffect } from "react";

const Legality = () => {
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
          Co_lab Apes Legal Disclaimer
        </h4>
        <p className=" text-[1.5rem] font-400 mt-[1.94rem] ">
          Effective Date: 8/10/2023
        </p>
        <img src={line} alt="line" className=" mt-[1.75rem] " />

        <p className=" text-[1rem]/[1.5rem] font-400 mt-[5.44rem] ">
          <b>1. General Information</b> <br />
          Co_lab Apes ("the Platform") provides a collaborative environment for
          creators. By accessing or using the Platform, you agree to the terms
          and conditions outlined in this Legal Disclaimer. If you do not agree
          with these terms, please do not use our platform. <br /> <br />
          <b>2. No Legal Advice</b> <br />
          The information and content provided on the Platform are for general
          informational purposes only. Nothing on the Platform constitutes
          legal, financial, or professional advice. You should consult with
          qualified professionals for advice specific to your situation. <br />{" "}
          <br />
          <b>3. Accuracy of Information</b> <br />
          We make every effort to ensure the accuracy and reliability of the
          information provided on the Platform. However, we do not warrant the
          completeness, reliability, or accuracy of this information. <br />{" "}
          <br />
          <b>4. No Attorney-Client Relationship</b> <br />
          Use of the Platform does not create an attorney-client or
          professional-client relationship between you and Co_lab Apes or any
          affiliated individuals or entities. Any communication with us through
          the Platform, including user-generated content, does not constitute
          legal or professional advice. <br /> <br />
          <b>5. User-Generated Content</b> <br />
          Users may contribute content to the Platform. Co_lab Apes is not
          responsible for the accuracy or legality of user-generated content. We
          reserve the right to remove or edit user-generated content that
          violates our policies or applicable laws. <br /> <br />
          <b>6. Third-Party Links</b> <br />
          The Platform may contain links to third-party websites or resources.
          Co_lab Apes is not responsible for the content or availability of
          these external sites. The inclusion of any links does not imply
          endorsement or affiliation with the linked sites. <br /> <br />
          <b>7. Limitation of Liability</b> <br />
          To the fullest extent permitted by law, Co_lab Apes, its affiliates,
          and its contributors are not liable for any direct, indirect,
          incidental, consequential, or punitive damages arising out of your use
          or inability to use the Platform. This includes but is not limited to
          loss of data, loss of profits, or any other loss or damage. <br />{" "}
          <br />
          <b>8. Changes to Legal Disclaimer</b> <br />
          Co_lab Apes may revise this Legal Disclaimer at any time. Please
          review this page periodically for updates. <br /> <br />
          <b>9. Governing Law</b> <br />
          This Legal Disclaimer is governed by and construed in accordance with
          the laws of [Jurisdiction]. Any disputes arising from this disclaimer
          will be subject to the exclusive jurisdiction of the courts in
          [Jurisdiction]. <br /> <br />
          <b>10. Contact Us</b> <br />
          If you have questions or concerns about this Legal Disclaimer, please
          contact us at help@colabapes.com <br /> <br />
          <b>11. Consent</b> <br />
          By using Co_lab Apes, you agree to this Legal Disclaimer and all
          applicable laws and regulations. <br /> <br />
          Thank you for choosing Co_lab Apes. Please use the platform
          responsibly and in compliance with these terms.
        </p>
      </section>
      <Foot />
    </main>
  );
};

export default Legality;

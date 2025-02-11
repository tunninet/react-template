'use client';
import FooterFive from "@/layouts/footers/footer-5";
import HeaderSeven from "@/layouts/headers/header-7"; 
import SingnInArea from "./singn-in-area";

const SignIn = () => {
  return (
    <>
      <HeaderSeven />
      <SingnInArea />
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default SignIn;

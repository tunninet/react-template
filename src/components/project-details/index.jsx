"use client";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFive from "@/layouts/footers/footer-5";
import HeaderSix from "@/layouts/headers/header-6";
import ProjectArea from "../homes/home/project-area";
import ProjectDetailsArea from "./project-details-area";
import ThumbArea from "./thumb-area";

const ProjectDetails = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight />
            <ThumbArea />
            <ProjectDetailsArea />
            <ProjectArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

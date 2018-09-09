import React from "react";

import ScrollToTopOnMount from "../widgets/scrollToTopOnMount";
import resume_pdf from "../assets/resume/QingGuo_DukeUniversity_SoftwareDevelopment.pdf";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <ScrollToTopOnMount />
      <object
        className="resume-pdf"
        trusted="yes"
        application="yes"
        title="QingGuo_DukeUniversity_SoftwareDevelopment"
        data={`${resume_pdf}?#zoom=scale&scrollbar=1&toolbar=1&navpanes=1`}
        type="application/pdf"
      >
        Your browser does not support pdfs,{" "}
        <a href={resume_pdf} target="_blank" title="resume pdf">
          click here to download the file.
        </a>
      </object>
    </div>
  );
};

export default Resume;

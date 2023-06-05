import React from "react";
import { BsDownload } from "react-icons/bs";
import "./Reports.css";

const Reports = () => {
  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  const analysis = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1QUN_-KkTRycNk1ctDXfA8pzECGgmbCTQ/view?usp=drive_link"
    );
  };
  const final = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1CvnaubGwtsURh7XNa5YYIHEL6dU51g7p/view?usp=drive_link"
    );
  };
  const groupinfo = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1p2U3opBSg_PzaiCpq5633nJj8QGYPofI/view?usp=drive_link"
    );
  };
  const highlevel = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/15K4CSvRpczxL96GNYs6BmpbzSstv-bIH/view?usp=drive_link"
    );
  };
  const lowlevel = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1B5auTxtChm7VcuaHyKBH7IuQEHXDP_5D/view?usp=drive_link"
    );
  };
  const specification = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1ixIxZDOOoV2pmyImXXIfMinOuI4eVqs3/view?usp=drive_link"
    );
  };
  const proposal = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1x6ie21Cod9VBGjppnXlWAN8R47uplFa0/view?usp=drive_link"
    );
  };
  const test = () => {
    openLinkInNewTab(
      "https://drive.google.com/file/d/1u-qITTZvfOX0xF1DNI6eVnprRR51_GG4/view?usp=drive_link"
    );
  };

  return (
    <div className="container">
      <div className="center">
        <h2>You can download our all reports here!</h2>
        <br></br>
        <button className="pdf-button" onClick={final}>
          <BsDownload className="pdf-icon" /> Final Report PDF
        </button>
        <button className="pdf-button" onClick={analysis}>
          <BsDownload className="pdf-icon" /> Analysis Report PDF
        </button>
        <button className="pdf-button" onClick={highlevel}>
          <BsDownload className="pdf-icon" /> High Level Report PDF
        </button>
        <button className="pdf-button" onClick={lowlevel}>
          <BsDownload className="pdf-icon" /> Low Level Report PDF
        </button>
        <button className="pdf-button" onClick={specification}>
          <BsDownload className="pdf-icon" /> Specification Report PDF
        </button>
        <button className="pdf-button" onClick={proposal}>
          <BsDownload className="pdf-icon" /> Proposal Report PDF
        </button>
        <button className="pdf-button" onClick={test}>
          <BsDownload className="pdf-icon" /> Test Plan Report PDF
        </button>
        <button className="pdf-button" onClick={groupinfo}>
          <BsDownload className="pdf-icon" /> Group Information Report PDF
        </button>
      </div>
    </div>
  );
};

export default Reports;

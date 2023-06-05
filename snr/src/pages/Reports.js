import React from "react";
import { BsDownload } from "react-icons/bs";
import "./Reports.css";

const Reports = () => {
  const downloadPDF = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "dosya.pdf";
    link.click();
  };

  return (
    <div className="container">
      <div className="center">
        <h2>You can download our all reports here !</h2>
        <br></br>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/Final.pdf")}>
          <BsDownload className="pdf-icon" /> Final Report PDF
        </button>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/Analysis.pdf")}>
          <BsDownload className="pdf-icon" /> Analysis Report PDF
        </button>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/GroupInfo.pdf")}>
          <BsDownload className="pdf-icon" /> Group Information PDF
        </button>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/HighLevel.pdf")}>
          <BsDownload className="pdf-icon" /> High Level Design PDF
        </button>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/LowLevel.pdf")}>
          <BsDownload className="pdf-icon" /> Low Level Design PDF
        </button>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/Proposal.pdf")}>
          <BsDownload className="pdf-icon" /> Project Proposal PDF
        </button>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/Specification.pdf")}>
          <BsDownload className="pdf-icon" /> Project Specification PDF
        </button>
        <button className="pdf-button" onClick={() => downloadPDF("/pdf/TestPlan.pdf")}>
          <BsDownload className="pdf-icon" /> Test Plan Report
        </button>
      </div>
    </div>
  );
};

export default Reports;

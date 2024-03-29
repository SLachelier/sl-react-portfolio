import React from 'react';
import SLResume from '../assets/SLachelier_resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const resumeStyles = `
  html {
    width: 100%;
  }
  .pdf {
    height: 1000px;
  }
  .react-pdf__Page__canvas {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, 0%) !important;
    border-radius: 12px;
  }
  .react-pdf__Page__textContent {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, 0%) !important;
  }
  .linkAnnotation {
  display: none;
  }
  `;

  return (
    <div>
      <div className="resume">
      <style>{resumeStyles}</style>
      <h2>Resume</h2>
      <object data="../assets/SLachelier_resume.pdf" type="application/pdf" width="100%" height="50px"> 
          <a href="../assets/SLachelier_resume.pdf">Click here to download the PDF file.</a>
      </object>
      </div>
      <Document file={SLResume} className="pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
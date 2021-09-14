import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

const pdfVersion = "2.6.347";
const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`;

function Pdf_viewer(props) {

  const document = props.location.document;

  console.log(document);

  return (
    <Worker workerUrl={pdfWorkerUrl}>
    <div>
      <Viewer
        fileUrl={document.url}
      />
    </div>
  </Worker>
  );

}

export default Pdf_viewer;
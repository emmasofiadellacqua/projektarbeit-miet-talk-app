import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Pdf_viewer(props) {

  const document = props.location.document;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={document.url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Seite {pageNumber} von {numPages}</p>
    </div>
  );
}

export default Pdf_viewer;
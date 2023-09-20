import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";
import MainDocument from "./pages/MainDocument";
import React from "react";

function App() {
  return (
    // <PDFDownloadLink document={<MainDocument />} fileName="digital-planner.pdf">
    //   {({ blob, url, loading, error }) =>
    //     loading ? "Loading document..." : "Download now!"
    //   }
    // </PDFDownloadLink>

    <PDFViewer>
      <MainDocument />
    </PDFViewer>
    // <MainDocument />
  );
}

export default App;

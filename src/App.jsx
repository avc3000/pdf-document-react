import PDF from "./components/PDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div className="app">
      <h1>USO DE REACT - PDF</h1>
      <PDFDownloadLink document={<PDF />} fileName="PDF_TEST.pdf">
        {({ loading, url, error, blob }) =>
          loading ? <button>Document</button> : <button>Download</button>
        }
      </PDFDownloadLink>
      <PDFViewer width={350} height={450}>
        <PDF />
      </PDFViewer>
    </div>
  );
}

export default App;

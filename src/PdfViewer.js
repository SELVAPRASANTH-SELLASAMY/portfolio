import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './css/resume.css';
const PdfViewer = ({pdfLocation}) => {
    const zoomPluginInstance = zoomPlugin();
    return(
        <div className="pdf-viewer">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer plugins={[zoomPluginInstance]} defaultScale={SpecialZoomLevel.PageWidth} fileUrl={pdfLocation}/>
            </Worker>
        </div>
    );
}
export default PdfViewer;
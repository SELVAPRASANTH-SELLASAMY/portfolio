import { saveAs } from 'file-saver';
import pdfFile from './assets/resume.pdf#toolbar=0&navpanes=0&scrollbar=0';
import './css/resume.css';
import PdfViewer from './PdfViewer';
const Resume = () => {
    const downloadHandler = () => {
        saveAs(pdfFile,'Selvaprasanth.pdf');
    }
    return(
        <div className='resume-container'>
            <div className='pdf-container'>
                <PdfViewer pdfLocation={pdfFile}/>
                <button onClick={()=>downloadHandler()}>Download CV</button>
            </div>
        </div>
    )
}
export default Resume;
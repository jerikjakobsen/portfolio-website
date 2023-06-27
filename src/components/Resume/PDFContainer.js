import {
    useCallback,
    useState,
    useMemo,
  } from 'react';

import Measure from 'react-measure';
import throttle from 'lodash/throttle';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFContainer() {
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  const fitHorizontal = useMemo(() => {
    const wRatio = pageWidth / wrapperWidth;
    const hRatio = pageHeight / wrapperHeight;
    if (wRatio < hRatio) {
      return false;
    }
    return true;
  }, [pageHeight, pageWidth, wrapperHeight, wrapperWidth]);

  const setWrapperDimensions = useCallback(throttle((w, h) => {
    setWrapperWidth(w);
    setWrapperHeight(h);
    console.log("wrapper dims", w, h)
  }, 500), []);
return (
    <Measure
        bounds
        onResize={(contentRect) => setWrapperDimensions(contentRect.bounds.width, contentRect.bounds.height)}
    >
      {({ measureRef }) => (
        <div ref={measureRef} style={{ margin: "20px", width: "80%"}}>
          <Document file="https://jerikjakobsen-resume-bucket.s3.amazonaws.com/resume.pdf" style={{maxWidth: "500px"}}>
              <Page 
                  key="page"
                  pageNumber={1} 
                  onLoadSuccess={(page) => {
                    
                    setPageWidth(wrapperWidth);
                    setPageHeight(wrapperHeight);
                    console.log(page.width, page.height)
                  }}
                  width={wrapperWidth}
                  
              />
          </Document>
        </div>
      )}
      </Measure>
  );
}
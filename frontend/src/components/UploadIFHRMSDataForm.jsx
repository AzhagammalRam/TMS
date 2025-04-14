import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import '../assets/css/excelUploader.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { BsCheckCircleFill } from "react-icons/bs"; // Bootstrap check icon

function UploadIFHRMSDataForm() {
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [uploadDone, setUploadDone] = useState(false);

  const simulateProgress = (target) => {
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= target) {
        clearInterval(interval);
        setProgress(100);
        setUploadDone(true);
      } else {
        setProgress(current);
      }
    }, 50); // speed of progress (50ms step)
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    setProgress(0);
    setUploadDone(false);

    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      console.log("Parsed Excel Data:", data);
      simulateProgress(100);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <h4 className='title-clr'>
                  <i className="bi bi-table me-2"></i> Upload IFHRMS Data
                </h4>
              </div>
              <div className="card-body">
                <div className="col-md-12 row p-3">
                  <div className="container text-center mt-5">
                    <h3 className="mb-4">Upload Excel File</h3>
                    <input
                      type="file"
                      accept=".xlsx, .xls"
                      className="form-control mb-4"
                      onChange={handleFileUpload}
                    />
                    {fileName && <h5 className='title-clr'>Success!! <strong>{fileName}</strong> Uploaded Successfully. </h5>}
                    <div
                      className="progress-circle"
                      style={{
                        background: `conic-gradient(#0d6efd ${progress}%, #e9ecef ${progress}%)`,
                      }}
                    >
                      {!uploadDone ? <span>{progress}%</span> : <CheckCircleIcon style={{fontSize:"80px", color:"white"}} />}
                    </div>

                    <div className='mt-5'><p><strong>Note:</strong> First time all data will be uploaded. From second time it will check the data base and upload only the Delta
                    </p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UploadIFHRMSDataForm;

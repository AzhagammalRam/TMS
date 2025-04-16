import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import TrainingDirectorate from './pages/Dashboards/TrainingDirectorate';
import TrainingCenter from './pages/Dashboards/TrainingCenter';
import DpoSpecialUnit from './pages/Dashboards/DpoSpecialUnit';
import Igp from './pages/Dashboards/Igp';
import CreateCourse from './pages/Forms/Directorate/CreateCourse';
import PublishCourseDetails from './pages/Forms/Directorate/PublishCourseDetails';
import CourseSummary from './pages/Forms/Directorate/CourseSummary';
import MTrainingCenter from './pages/Masters/MTrainingCenter';
import UploadIFHRMSData from './pages/Forms/Directorate/UploadIFHRMSData';
import HopfLetterOutside from './pages/Forms/Directorate/HopfLetterOutside';
import HopfOutsideComUpload from './pages/Forms/Directorate/HopfOutsideComUpload';
import HopfOutsideComApproval from './pages/Forms/Directorate/HopfOutsideComApproval';
import ApprovedListInternalCom from './pages/Forms/Directorate/ApprovedListInternalCom';
import TCApprovedListInternalCom from './pages/Forms/Trainingcenter/TCApprovedListInternalCom';
import ApprovedListInternalCommunicationList from './pages/Forms/Directorate/ApprovedListInternalCommunicationList';
import CollateandSentforApproval from './pages/Forms/Directorate/CollateandSentforApproval';
import CollateandsentapprovalList from './pages/Forms/Directorate/CollateandsentapprovalList';
import DownloadTemplate from './pages/Forms/Directorate/DownloadTemplate';
import SendProfile from './pages/Forms/Directorate/SendProfile';
import DataBankCRUD from './pages/Forms/Directorate/DataBankCRUD';
import CCCertificateUpload from './pages/Forms/Directorate/CCCertificateUpload';
import CourseCertificateUpload from './pages/Forms/Trainingcenter/CourseCertificateUpload';
import Collateandsent from './pages/Forms/Trainingcenter/Collateandsent';
import TCApprovedListIntCom from './pages/Forms/Trainingcenter/TCApprovedListIntCom';
import TCCreateCourse from './pages/Forms/Trainingcenter/TCCreateCourse';
import TCPublishCourse from './pages/Forms/Trainingcenter/TCPublishCourse';
import TCCourseSummary from './pages/Forms/Trainingcenter/TCCourseSummary';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TrainingDirectorate" element={<TrainingDirectorate />} />
        <Route path="/TrainingCenter" element={<TrainingCenter />} />
        <Route path="/DpoSpecialUnit" element={<DpoSpecialUnit />} />
        <Route path="/Igp" element={<Igp />} />
        <Route path="/CreateCourse" element={<CreateCourse />} />
        <Route path="/PublishCourseDetails" element={<PublishCourseDetails />} />
        <Route path="/CourseSummary" element={<CourseSummary />} />
        <Route path="/MTrainingCenter" element={<MTrainingCenter />} />
        <Route path='/UploadIFHRMSData' element={<UploadIFHRMSData />} />
        <Route path="/HopfLetterOutside" element={<HopfLetterOutside/>} />
        <Route path="/HopfOutsideComUpload/:id" element={<HopfOutsideComUpload />} />
        <Route path="/HopfOutsideComApproval/:id" element={<HopfOutsideComApproval/>} />
        <Route path="/ApprovedListInternalCommunication" element={<ApprovedListInternalCom/>} />
        <Route path="/ApprovedListInternalCommunicationList/:id" element={<ApprovedListInternalCommunicationList/>} />
        <Route path="/CollateandSent" element={<CollateandSentforApproval/>} />
        <Route path="/CollateandSentForApproval/:id" element={<CollateandsentapprovalList/> }   />
        <Route path="/DownloadTemplate" element={<DownloadTemplate />} />
        <Route path='/SendProfile' element={<SendProfile /> } />
        <Route path="/DataBankCRUD" element={ <DataBankCRUD /> } />
        <Route path="/DirectorateCCupload" element={<CCCertificateUpload/>  } />  
        <Route path="/TCCCupload" element={<CourseCertificateUpload/>} />
        <Route path='/TCCollateandsent' element={<Collateandsent/>} />
        <Route path='/TCApprovedListInternalCom' element={<TCApprovedListInternalCom/>} />
        <Route path='/TCApprovedListInternalCom/:id' element={<TCApprovedListIntCom/> } />
        <Route path='/TCCreateCourse' element={<TCCreateCourse/>} />
        <Route path='/TCPublishCourseDetails' element={<TCPublishCourse/>} />
        <Route path='/TCCourseSummary' element={<TCCourseSummary/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
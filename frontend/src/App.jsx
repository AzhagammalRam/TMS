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
import ApprovedListInternalCommunicationList from './pages/Forms/Directorate/ApprovedListInternalCommunicationList';
import CollateandSentforApproval from './pages/Forms/Directorate/CollateandSentforApproval';
import CollateandsentapprovalList from './pages/Forms/Directorate/CollateandsentapprovalList';

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
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
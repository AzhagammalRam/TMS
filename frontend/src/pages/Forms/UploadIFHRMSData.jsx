import React from 'react'
import UploadIFHRMSDataForm from '../../components/UploadIFHRMSDataForm'
import NavBar from '../NavBar/DirectorateNavBar'

function UploadIFHRMSData() {
  return (
    <>
    <NavBar />
        <div className='container'><UploadIFHRMSDataForm /></div>
    </>
  )
}

export default UploadIFHRMSData
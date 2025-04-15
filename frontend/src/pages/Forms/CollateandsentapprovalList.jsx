import React from 'react'
import CollateandsentforApprovalListGrid from '../../components/collateandsentforApprovalListGrid'
import NavBar from '../NavBar/DirectorateNavBar'

function CollateandsentapprovalList() {
  return (
    <>
      <NavBar />
     <div className='container'><CollateandsentforApprovalListGrid/></div>
    </>
  )
}

export default CollateandsentapprovalList
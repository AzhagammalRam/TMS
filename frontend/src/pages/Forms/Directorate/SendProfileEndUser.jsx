import React from 'react'
import NavBar from '../../NavBar/DirectorateNavBar'
import SendProfileEndUserGrid from '../../../components/DirectorateComponent/SendProfileEndUserGrid'

function SendProfileEndUser() {
  return (
    <>
    <NavBar />
    <div className='container'><SendProfileEndUserGrid /></div>
    </>
  )
}

export default SendProfileEndUser
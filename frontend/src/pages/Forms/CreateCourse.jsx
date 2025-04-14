import React from 'react'
import CreateCourseForm from '../../components/CreateCourseForm'
import NavBar from '../NavBar/DirectorateNavBar'

function CreateCourse() {
  return (
    <>
        <NavBar />
        <div className='container'><CreateCourseForm /></div>
    </>
  )
}

export default CreateCourse
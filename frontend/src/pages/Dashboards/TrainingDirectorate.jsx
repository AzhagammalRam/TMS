import React from 'react'
import TrainingDirectorateCounter from '../../components/Dashboard/TrainingDirectorateCounter'
import TrainingDirectorateCard from '../../components/Dashboard/TrainingDirectorateCard'
import NavBar from '../NavBar/NavBar'

function TrainingDirectorate() {
  return (
    <>
    <NavBar />
    <TrainingDirectorateCounter />     
    <TrainingDirectorateCard /> 
    </>
  )
}

export default TrainingDirectorate
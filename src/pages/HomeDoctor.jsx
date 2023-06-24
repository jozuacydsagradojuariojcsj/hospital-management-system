import React from 'react'
import DoctorNavbar from '../components/DoctorLandingPageComponents/DoctorNavbar'
import CardDiv from '../components/DoctorLandingPageComponents/CardDiv'
import DataFromDB from '../components/DoctorLandingPageComponents/DataFromDB'
import TableTRY from '../components/DoctorLandingPageComponents/TableTRY'
import TryAgain from '../components/DoctorLandingPageComponents/TryAgain'
import PatientTable from '../components/DoctorLandingPageComponents/PatientTable'


const HomeDoctor = () => {
  
  return (
    <>
  
      <DoctorNavbar/>
      
      {/* <TryAgain/> */}
      {/* <TableTRY/> */}
      {/* <DataFromDB/> */}
      {/* <PatientTable/> */}
   
      <CardDiv/>

  
      
    </>
  )
}

export default HomeDoctor
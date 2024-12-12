import React from 'react'
import NoOfEmployee from '../Components/NoOfEmployee'
import Present from '../Components/Present'
import DeptWise from '../Components/DeptWise'
import DateTimeDisplay from '../Components/Date'


function Dashboard() {
  
  return (
    <div className='content App '>
      <div className='dashboard'>
        <div><NoOfEmployee /></div>
        <div><Present /></div>
        <div><DateTimeDisplay/></div>
      </div>
      <div><DeptWise /></div>
      
    </div>
  )
}

export default Dashboard
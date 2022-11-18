import React from 'react'
import skilltest from './../../assets/skill-test.svg'
const Sidebar = () => {
  return (
    <div>
      <div>
        <div></div>
        <div>Dashboard</div>
      </div>
      {/* skill test */}
      <div>
        <img src={skilltest} alt=""/>
      </div>
    </div>
  )
}

export default Sidebar

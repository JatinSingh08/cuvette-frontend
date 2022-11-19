import React from 'react'
import skilltest from './../../assets/skill-test.svg'
import dashboard from './../../assets/dashboard.svg'
import internships from './../../assets/internships.svg'
import verticalline from './../../assets/verticalline.svg'
const Sidebar = () => {
  return (
    <div className='mt-[44px] flex float-left'>
      <div >

        <div className='rounded-r-[100px] hover:ml-[-44px]'>
          <img src={dashboard} alt="" className='ml-[14px] mt-[4px]'/>
        </div>
      
        {/* skill test */}
        <div className='mt-[30px] hover:bg-[#F7F8FA]'>
          <img src={skilltest} alt="" className='ml-[14px]'/>
        </div>
        <div className='mt-[30px] hover:bg-[#F7F8FA]'>
          <img src={internships} alt="" className='ml-[14px]'/>
        </div>

      </div>
      <div className='mt-[-45px] ml-[40px]'>

        <img src={verticalline} alt="" />
      </div>
    </div>
  )
}

export default Sidebar

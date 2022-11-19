import React from 'react'
import cuvette from './../../assets/cuvette.svg'
import cuvetteasset1 from './../../assets/cuvette-asset1.svg'

const Header = () => {
  return (
    <div>

      <div className='flex justify-between mt-[28px]'>
        <img src={cuvette} alt="Cuvette" />
        <div className=' flex border box-border w-36 rounded-xl p-1 justify-between border-[#EBF0F5] '>
          <img src={cuvetteasset1} alt="sid-pic"/>
          <span className="font-700 whitespace-nowrap mr-1 ml-1 font-medium">Siddharth Jain</span>
        </div>
      </div>
      <div className='mt-[30px]'>
        <hr className='divide-[#EBF0F5] ml-[-30px] mr-[-30px] '/>
      </div>
    </div>
  )
}

export default Header

import React, { useState } from 'react'
import Form from '../../PopupForm/Form.js';
import htmllogo from './../../../assets/htmllogo.svg'

const TestDetails = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOnClose = () => setOpenForm(false);
  return (
    <div className=' border-[1px] border-[#EBF0F5] rounded-[10px] w-[717px] h-[109px] ml-[40px] mt-[76px] flex '>
      <img src={htmllogo} alt="" className='ml-[30px] w-[30px] '/>
      <div className='ml-[20px] mt-[31px] whitespace-nowrap text-left'>
        <div className="font-[700] ml-0 ">Hypertext Markup Language</div>
        <div className='w-[320px] h-[22px] font-[400] text-[12px] text-[#566474]'>Questions: 08 | Durations: 15 mins | Submitted on 5 June 2021</div>
      </div>
      
      <div className='flex justify-end ml-[161px] mt-[33px] mb-[32px] mr-[30px]'>
        
        <div className='flex flex-row justify-center p-[4px] w-[120px] h-[44px] border bg-[#142683] rounded-[5px] hover:cursor-pointer' onClick={() => setOpenForm(true)}>
          <div className='text-[#ffffff] w-[49px] h-[28px] font-[700] text-[14px] mt-[8px] mb-[px] ml-[35px] mr-[35px] tracking-[-0.02em]'>
            <button onClick={() => setOpenForm(true)}>Update</button>
          </div>
        </div>
        <Form visible={openForm} onClose={handleOnClose}/>
      </div>
    </div>
  )
}

export default TestDetails

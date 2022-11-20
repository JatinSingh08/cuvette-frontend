import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
const SyllabusAnalysis = () => {
  return (
    <div className='border-[1px] border-[#EBF0F5] rounded-[10px] w-[386px] h-[429px] ml-[30px] mt-[30px] flex text-left'>
      <div className='flex flex-col'>

        <div className=' h-[28px] mt-[30px] ml-[30px]'>
          <div className='font-[700] text-[16px] font-sans'>Syllabus wise Analaysis</div>
        </div>
        <div className='ml-[30px] mt-[20px]'>

            <div>
              <div>HTML Tools, Forms, History</div>
              <div className='flex'>
                <ProgressBar completed={80} bgColor='#438AF6' width='197px' height='15px' isLabelVisible={false} animateOnRender={true}/>
                <div className='ml-[94px] text-[#438AF6] font-[700] text-[16px]'>80%</div>
              </div>
              
            </div>
            
            <div className='mt-[50px]'>
              
              <div>Tags & References in HTML</div>
              <div className='flex'>
                <ProgressBar completed={60} bgColor='#FF9142' width='197px' height='15px' isLabelVisible={false} animateOnRender={true}/>
                <div className='ml-[94px] text-[#FF9142] font-[700] text-[16px]'>60%</div>
              </div>
            </div>

            <div className='mt-[50px]'>
              <div>Tables & CSS Basics</div>
              <div className='flex'>
                <ProgressBar completed={24} bgColor='#FB5E5E' width='197px' height='15px' isLabelVisible={false} animateOnRender={true}/>
                <div className='ml-[94px] text-[#FB5E5E] font-[700] text-[16px]'>24%</div>
              </div>
            </div>

            <div className='mt-[50px]'>
              <div>Tables & CSS Basics</div>
              <div className='flex'>
                <ProgressBar completed={96} bgColor='#2EC971' width='197px' height='15px' isLabelVisible={false} animateOnRender={true}/>
                <div className='ml-[94px] text-[#2EC971] font-[700] text-[16px]'>96%</div>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SyllabusAnalysis

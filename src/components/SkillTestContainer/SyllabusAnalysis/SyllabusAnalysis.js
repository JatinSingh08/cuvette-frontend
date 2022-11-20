import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
const SyllabusAnalysis = () => {
  return (
    <div className='border-[1px] border-[#EBF0F5] rounded-[10px] w-[386px] h-[429px] ml-[267px] mt-[30px] flex text-left'>
      <div className='flex flex-col'>

        <div className=' h-[28px] mt-[30px] ml-[30px]'>
          <div className='font-[700] text-[16px] font-sans'>Syllabus wise Analaysis</div>
        </div>
        <div className='ml-[30px] mt-[20px]'>

            <div>
              <div>HTML Tools, Forms, History</div>
              <div>
                <ProgressBar completed={80} bgColor='#438AF6' width='197px' height='15px' isLabelVisible={false}/>
              </div>
              
            </div>
            
            <div className='mt-[68px]'>
              <div>Tags & References in HTML</div>
              <div>
                <ProgressBar completed={60} bgColor='#FF9142' width='197px' height='15px' isLabelVisible={false}/>
              </div>
            </div>

            <div className='mt-[68px]'>
              <div>Tables & CSS Basics</div>
              <div>
                <ProgressBar completed={24} bgColor='#FB5E5E' width='197px' height='15px' isLabelVisible={false}/>
              </div>
            </div>

            <div className='mt-[68px]'>
              <div>Tables & CSS Basics</div>
              <div>
                <ProgressBar completed={96} bgColor='#2EC971' width='197px' height='15px' isLabelVisible={false}/>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SyllabusAnalysis

import React from 'react'
import piechart from './../../../assets/piechart.svg'
// import PieChart from '../../Graphs/PieChart'
// import Chart_Donught from '../../Graphs/PieChart'
// import piechart from './../../../assets/piechart.svg';

const QuestionsAnalysis = () => {
  return (
    <div className='border-[1px] border-[#EBF0F5] rounded-[10px] w-[386px] h-[393px] ml-[30px] mt-[30px] flex text-left'>
      <div>

        <div className='flex'>
          <div className='flex flex-col'>

              <div className='mt-[31px] ml-[30px]'>
                <div className='font-[700] text-[16px] tracking-[-0.02em]'>Question Analysis</div>
              </div>

              <div className='ml-[30px] mt-[20px]'>
                <div className='text-[#566474] font-[400] w-[326px] h-[42px]'><span className='font-[700]'>You scored 7 question correct out of 15.</span> However it<br />
                still needs some improvements</div>
              </div>

          </div>
              {/* <div className=' truncate'>
                <div className='text-[#438AF6] mr-[100px] '>07 / 15</div>
              </div> */}
        </div>
        <div className='w-[180px] h-[166px] mt-[49px] ml-[103px] mr-[203px] flex justify-start'>
          <div>

            <img src={piechart} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsAnalysis

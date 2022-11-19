import React from 'react'
import graph from './../../../assets/graph.svg'
import graphlogo from './../../../assets/graphlogo.svg'
const ComparisonGraph = () => {
  return (
    <div className=' border-[1px] border-[#EBF0F5] rounded-[10px] w-[717px] h-[525px] ml-[267px] mt-[30px] flex text-left'>
      
      <div >

        <div className='flex'>

          {/* comparison graph text  */}
          <div className='flex flex-col'>

            <div className='w-[142px] h-[28px] ml-[30px] mt-[30px]'>
              <div className='font-[700] tracking-[-0.02em] color-[#1E272E] text-[16px] font-sans'>Comparison Graph</div>
            </div>
            {/* comparison graph text  */}

            <div className='ml-[30px] mt-[20px] w-[432px] h-[42px]'>
              <div className='font-[400] text-[12px] text-[#566474] font-sans'><span className='font-[700]'>You scored 37% percentile </span>which is lower than the <br />
              average percentile 72% of all the engineers who took this assessment</div>
            </div>
          </div>

          <div className='ml-[171px] mt-[49px] mr-[34px]'>
            <img src={graphlogo} alt="" />
          </div>
        </div>

        <div className='ml-[30px] mt-[30px] mb-[30px]'>
          <img src={graph} alt="" />
        </div>

      </div>
    </div>
  )
}

export default ComparisonGraph

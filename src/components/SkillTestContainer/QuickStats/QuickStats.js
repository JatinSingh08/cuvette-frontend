import React from 'react'
import trophy from './../../../assets/trophy.svg'
import smallvertical from './../../../assets/smallvertical.svg'
import book from './../../../assets/book.svg'
import correct from './../../../assets/correct.svg'
import { useGlobalState } from '../../PopupForm/Form'
const QuickStats = () => {
  const rank = useGlobalState('rank')
  const percentile = useGlobalState('percentile')
  const score = useGlobalState('score')
  return (
    <div className=' border-[1px] border-[#EBF0F5] rounded-[10px] w-[717px] h-[158px] ml-[267px] mt-[30px] flex text-left'>
      
      <div className='ml-[1px]'>

      <div className='flex justify-items-center'>
        {/* quick stats text */}
        <div>

         <div className='h-[28px] ml-[30px] mt-[30px] font-[700] text-[16px] tracking-[-0.02em] text-[#1E272E] font-sans'>Quick Statistics</div>
        
          <div className='flex flex-row '>
            <div className='w-[50px] h-[50px] ml-[30px] mt-[20px] mb-[30px]'>

              <img src={trophy} alt="trophy" />
            </div>

            <div className='ml-[20px] mt-[20px] text-left mb-[30px]'>
              <div className='w-[66px] h-[29px] ml-[20px] mb-[5px] font-[700] text-[22px] tracking-[-0.02em]'>{rank}</div>
              <div className='w-[63px] h-[16px] ml-[20px] mb-[30px] font-[400] text-[12px] tracking-[-0.02em]  text-[#9EAAB7]'>YOUR RANK</div>
            </div>
          </div>
        </div>
        
        {/* rank */}

        <div className='ml-[50px] mt-[78px] mb-[30px] w-1'>

          <img src={smallvertical} alt="verticalline" className='' />
        </div>
        
        {/* percentile */}
        <div className='flex flex-row'>
          <div className='w-[50px] h-[50px] ml-[30px] mt-[78px] mb-[30px]'>

            <img src={book} alt="" />
          </div>
          <div className='ml-[20px] mt-[78px] text-left mb-[30px]'>
            <div className='w-[66px] h-[29px] ml-[20px] mb-[5px] font-[700] text-[22px] tracking-[-0.02em]'>{percentile}%</div>
            <div className='w-[63px] h-[16px] ml-[20px] mb-[30px] font-[400] text-[12px] tracking-[-0.02em]  text-[#9EAAB7]'>PERCENTILE</div>
          </div>
        </div>
        {/* percentile */}
        
        <div className='ml-[50px] mt-[78px] mb-[30px] w-2'>

          <img src={smallvertical} alt="verticalline" className='' />
        </div>

        {/* correct answers  */}
        <div className='flex flex-row '>
          <div className='w-[50px] h-[50px] ml-[30px] mt-[78px] mb-[30px]'>

            <img src={correct} alt="" />
          </div>
          <div className='ml-[20px] mt-[78px] text-left mb-[30px] mr-[34px]'>
            <div className='w-[66px] h-[29px] ml-[20px] mb-[5px] font-[700] text-[22px] tracking-[-0.02em]'>{score}/15</div>
            <div className='w-[110px] h-[16px] ml-[20px] mb-[30px] font-[400] text-[12px] tracking-[-0.02em] text-[#9EAAB7] truncate'>CORRECT ANSWERS</div>
          </div>
        </div>
        {/* correct answers  */}


      </div>
      </div>

    </div>
  )
}

export default QuickStats

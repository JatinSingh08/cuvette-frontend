import React, { useState } from 'react'
import htmllogo from './../../assets/htmllogo.svg'
import hrline from './../../assets/hrline.svg'
import onelogo from './../../assets/onelogo.svg'
import twologo from './../../assets/twologo.svg'
import threelogo from './../../assets/threelogo.svg'
import arrowright from './../../assets/arrow-right.svg'
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState ,useGlobalState } = createGlobalState({
  'rank': 12890,
  'percentile': 37,
  'score': 7
});

const Form = ({visible, onClose}) => {
  // const [formFields, setFormFields] = useGlobalState(initialFormFields);

  // const [rank, setRank] = useState();
  // const [percentile, setPercentile] = useState();
  // const [score, setScore] = useState();

  const rankInputHandler = (e) => {
    // console.log(formFields.rank)
    var value = Number(e.target.value);
    setGlobalState('rank',value)
  }
  const percentileInputHandler = (e) => {
    // console.log(formFields.percentile)
    var value = Number(e.target.value);
    setGlobalState('percentile',value)

  }
  const scoreInputHandler = (e) => {
    // console.log(formFields.score)
    var value = Number(e.target.value);
    setGlobalState('score',value)

  }

  const saveButtonHandler = () => {

    onClose();
  }
  const handleOnClose = (e) => {
    if(e.target.id === 'container') {

      onClose();
    }
  }
  if(!visible) return null;
  return (
    <div className=' fixed inset-0 bg-opacity-[0.7] bg-[#1e272e] backdrop-blur-lg flex justify-center items-center' onClick={handleOnClose} id='container'>
      <div className='border w-[880px] h-[521px] bg-white rounded-[10px] '>

        <div className='flex ml-[40px] mt-[40px] w-'>
          <div className='font-[700] text-[36px] tracking-[-0.02em]'>
            <div>Update Scores</div>
          </div>
          <div className='ml-[300px] mr-[40px] justify-end w-[35px] h-[47px]'>
            <img src={htmllogo} alt="" className=''/>
          </div> 
          
        </div>

        <div className='ml-[40px] mt-[99px] flex flex-col '>
          
          <div className='flex  '>
            <img src={onelogo} alt="" />
            <div className='ml-[20px] text-[#566474] font-[400] text-[18px] tracking-[-0.02em] '>
              <div className='mt-[10px]'>Update your <span className='font-[700]'>rank</span></div>
            </div>
            <div className='mr-[30px] ml-[460px]'>
              <input type="number" className='border border-black rounded-[5px] w-[157px] h-[44px] text-center' onChange={(e) => rankInputHandler(e)}/>
            </div>
          </div>

          <div className='flex  mt-[28px]'>
            <img src={twologo} alt="" />
            <div className='ml-[20px] text-[#566474] font-[400] text-[18px] tracking-[-0.02em] '>
              <div className='truncate mt-[10px]'>Update your <span className='font-[700]'>percentile</span></div>
            </div>
            <div className='mr-[30px] ml-[415px]'>
              <input type="number" className='border border-black rounded-[5px] w-[157px] h-[44px] text-center' onChange={(e) => percentileInputHandler(e) }/>
            </div>
          </div>

          <div className='flex  mt-[28px]'>
            <img src={threelogo} alt="" />
            <div className='ml-[20px] text-[#566474] font-[400] text-[18px] tracking-[-0.02em] '>
              <div className='truncate mt-[10px]'>Update your <span className='font-[700]'>current score (out of 15)</span></div>
            </div>
            <div className='mr-[30px] ml-[300px]'>
              <input type="number" className='border border-black rounded-[5px] w-[157px] h-[44px] text-center  -webkit-appearance: none' onChange={(e) => scoreInputHandler(e) }/>
            </div>
          </div>
        
        <div className='flex ml-[500px] mt-[80px] mb-[58px] mr-[74px]' onClick={onClose}>
          <div className='w-[216px] h-[44px] border border-[#142683] rounded-[5px] flex justify-center hover:cursor-pointer'>
            <button className='text-[#142683] font-[700] text-[16px] font-sans' onClick={onClose}>Cancel</button>
          </div>
          <div className='ml-[50px] w-[216px] h-[44px] border border-[#142683] rounded-[5px] flex justify-center pt-[8px] pb-[8px] pl-[16px] pr-[16px] bg-[#142683] hover:cursor-pointer' onClick={saveButtonHandler}>
            <button className='text-white font-[700] text-[16px] font-sans mr-[11px]tracking-[-0.02em]' onClick={saveButtonHandler}>Save</button>
            <img src={arrowright} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Form
export {useGlobalState, setGlobalState}
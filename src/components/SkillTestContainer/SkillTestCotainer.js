import React from 'react'
import ComparisonGraph from './ComparisonGraph/ComparisonGraph'
import SyllabusAnalysis from './SyllabusAnalysis/SyllabusAnalysis'
import QuickStats from './QuickStats/QuickStats'
import TestDetails from './TestDetails/TestDetails'
import QuestionsAnalysis from './QuestionAnalysis/QuestionsAnalysis'
import PieChart from '../Graphs/PieChart'


const SkillTestCotainer = () => {
  return (
    <div className='flex flex-row'>
      <div className='ml-[px]'>
        <TestDetails/>
        <QuickStats />
        <ComparisonGraph />
      </div>
      <div>
        <SyllabusAnalysis />
        <QuestionsAnalysis />
      </div>

    </div>
  )
}

export default SkillTestCotainer

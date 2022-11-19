import React from 'react'
import ComparisonGraph from './ComparisonGraph/ComparisonGraph'
import SyllabusAnalysis from './SyllabusAnalysis/SyllabusAnalysis'
import QuickStats from './QuickStats/QuickStats'
import TestDetails from './TestDetails/TestDetails'
import QuestionsAnalysis from './QuestionAnalysis/QuestionsAnalysis'


const SkillTestCotainer = () => {
  return (
    <div className=''>
      <TestDetails/>
      <QuickStats />
      <ComparisonGraph />
      <SyllabusAnalysis />
      <QuestionsAnalysis />
    </div>
  )
}

export default SkillTestCotainer

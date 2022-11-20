import DonoutChart from 'simple-react-donut-chart'
import 'simple-react-donut-chart/src/style.css'

import React from 'react'

const PieChart = () => {
  return (
      <DonoutChart
    percentage={20}
    colorOn="#438AF6"
    colorOff="#ff0000"
    labelOff="Me"
    labelOn="You"
    circleColor="#ffffff"
    baseClass="customize"
    textStyle={{
        color: '#ff0000',
    }}
    labelStyle={{
        off: {
            fontSize: '16px',
        },
        on: {
            fontSize: '18px',
        },
    }}
/>

  )
}

export default PieChart

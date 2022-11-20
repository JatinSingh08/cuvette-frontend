import React from 'react';
import { Progress } from 'antd';
const percent = (num) => {
  const value = Number(( (num) / 15) * 100);
  return value;
}
const App = () => (

  <>
    <Progress type="circle" percent={percent} format={(percent) => `${percent} Days`} />
    {/* <Progress
      type="circle"
      percent={100}
      format={() => 'Done'}
      style={{
        marginLeft: 8,
      }}
    /> */}
  </>
);
export default App;
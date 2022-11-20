import { LineGraph } from 'react-line-graph'

const data = [10,0,-2.5,540]; // LineGraph reads these as y-values, automatically spaces them out evenly
<LineGraph data={data}/>

export default LineGraph
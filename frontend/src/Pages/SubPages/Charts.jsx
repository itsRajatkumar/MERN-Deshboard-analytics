import * as React from 'react';
import Barchart from '../../Components/BarChart/Barchart';
import LineChart from '../../Components/LineChart/LineChart';
import Stackedbar from '../../Components/StackedBar/Stackedbar';

export default function Charts({data,range}) {
  // const [range, setRange] = React.useState("")
  return (
    <>
    <div style={{ margin:"40px", marginTop: "50px",  width: "95%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
      <Barchart data={data}/>
      <LineChart data={data}/>
    </div>
    <div style={{ margin:"40px", marginTop: "50px",  width: "95%"}}>
      {range === "day" ? "": <Stackedbar data={data}/>}
    </div>
    </>

  );
}
import * as React from 'react';
import Barchart from '../../Components/BarChart/Barchart';
import LineChart from '../../Components/LineChart/LineChart';
import Stackedbar from '../../Components/StackedBar/Stackedbar';

export default function Charts() {
  const [range, setRange] = React.useState("")
  return (
    <>
    <div style={{ margin:"40px", marginTop: "50px",  width: "95%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
      {/* <Barchart/> */}
      {/* <LineChart/> */}
    </div>
    <div style={{ margin:"40px", marginTop: "50px",  width: "95%"}}>
      {/* <Stackedbar/> */}
    </div>
    </>

  );
}
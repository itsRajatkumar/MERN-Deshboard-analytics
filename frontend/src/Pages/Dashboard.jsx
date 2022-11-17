import * as React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import Selects from '../Components/Selects/Selects';
import SelectType from "../Components/Selects/SelectType"
import Charts from "./SubPages/Charts"
import ConstentChart from "./SubPages/ConstentChart"
import Header from './SubPages/Header';
import TableList from '../Components/Table/TableList';
import CompareStackedChart from '../Components/CompareStackedChart/CompareStackedChart';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
ChartJS.register(...registerables);

export default function Dashboard() {
  const [year,setYear] = React.useState("2022")
  const [month,setMonth] = React.useState("November")
  const [date,setDate] = React.useState("11/16/2022")
  const [data, setData] = React.useState([])
  const [year2,setYear2] = React.useState("2022")
  const [month2,setMonth2] = React.useState("November")
  const [date2,setDate2] = React.useState("11/16/2022")
  const [data2, setData2] = React.useState([])
  const [range, setRange] = React.useState("year")
  const [type, setType] = React.useState("normal")
  const [loaded1, setLoaded1] = React.useState(false)
  const [loaded2, setLoaded2] = React.useState(false)
  
  const ClickSubmit = ()=>{
    setLoaded2(false)
    axios.get(`${ process.env.REACT_APP_API}/chart-data?type=${type}&range=${range}&data=${range == "year" ? year: range == "month" ? year+"-"+month: date}&data2=${range == "year" ? year2: range == "month" ? year2+"-"+month2: date2}`)
    .then((response) => {
      console.log(response.data.data)
      setData2(response.data.data);
      setLoaded2(true)
    });
  }

  console.log(date)
  React.useEffect(() => {
    ClickSubmit();
    axios.get(`${ process.env.REACT_APP_API}/chart-data?type=normal&range=year&data=2022`)
    .then((response) => {
      console.log(response.data.data)
      setData(response.data.data);
      setLoaded1(true)
    });
  }, []);

  return (
    <>
    { loaded1 ? <ConstentChart data={data}/>: <div style={{width:"100%", marginTop:"100px", display:"flex",flexDirection:"row", justifyContent:"center"}}><CircularProgress /></div>}
    <Header year = {year} setYear={setYear} year2 = {year2} setYear2={setYear2} range={range} type={type} setRange={setRange} setType={setType} month={month} setMonth={setMonth} date={date} setDate={setDate} month2={month2} setMonth2={setMonth2} date2={date2} setDate2={setDate2} ClickSubmit={ClickSubmit}/>
    { loaded2 ? <Charts range={range} data={data2}/> : <div style={{width:"100%", marginTop:"100px", display:"flex",flexDirection:"row", justifyContent:"center"}}><CircularProgress /></div>}
    <TableList/>
    {/* {loaded2 ?<CompareStackedChart data={data}/> :""} */}
    </>

  );
}
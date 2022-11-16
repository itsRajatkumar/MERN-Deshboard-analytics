import * as React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import Selects from '../Components/Selects/Selects';
import SelectType from "../Components/Selects/SelectType"
import Charts from "./SubPages/Charts"
import ConstentChart from "./SubPages/ConstentChart"
import Header from './SubPages/Header';
import TableList from '../Components/Table/TableList';
import axios from 'axios';
ChartJS.register(...registerables);

export default function Dashboard() {
  const [year,setYear] = React.useState("2022")
  const [month,setMonth] = React.useState("November")
  const [date,setDate] = React.useState("11/16/2022")
  const [data, setData] = React.useState([])
  const [data2, setData2] = React.useState([])
  const [range, setRange] = React.useState("year")
  const [type, setType] = React.useState("normal")
  const [loaded1, setLoaded1] = React.useState(false)
  const [loaded2, setLoaded2] = React.useState(false)
  
  const ClickSubmit = ()=>{
    axios.get(`https://8000-itsrajatkum-merndeshboa-ozqffjz0qay.ws-us74.gitpod.io/chart-data?type=${type}&range=${range}&data=${range == "year" ? year: range == "month" ? year+"-"+month: date}`)
    .then((response) => {
      console.log(response.data)
      setData2(response.data.data);
      setLoaded2(true)
    });
  }

  console.log(date)
  React.useEffect(() => {
    axios.get("https://8000-itsrajatkum-merndeshboa-ozqffjz0qay.ws-us74.gitpod.io/chart-data?type=normal&range=year&data=2022")
    .then((response) => {
      console.log(response.data.data)
      setData(response.data.data);
      setLoaded1(true)
    });
  }, []);


  return (
    <>
    { loaded1 ? <ConstentChart data={data}/>:""}
    <Header year = {year} setYear={setYear} range={range} type={type} setRange={setRange} setType={setType} month={month} setMonth={setMonth} date={date} setDate={setDate} ClickSubmit={ClickSubmit}/>
    {setLoaded2 ? <Charts/> :""}
    <TableList/>
    </>

  );
}
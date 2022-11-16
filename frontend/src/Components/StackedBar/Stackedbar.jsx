import React from 'react'
import { Bar } from 'react-chartjs-2'
import { getRandomColor } from '../../data'

const Stackedbar = ({data}) => {
  const dataset = data?.dataset.map((e)=>{
    return { label:e.label,data:e.data,backgroundColor:getRandomColor() }
  })
    const labels = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const Chartdata = { labels : data.label,
        datasets: dataset
}
    
    const options={
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
      legend: {
        display: false,
        position: "bottom"
     }
    },
    maintainAspectRatio: false 
  }


  return (
    <div>
        <Bar
            data={Chartdata}
            options={options}
            width={"500px"}
            height={"450px"}
        >
        </Bar>
    </div>
  )
}

export default Stackedbar
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { getRandomColor } from '../../data'

const CompareStackedChart = ({data}) => {
  const dataset = data?.dataset.map((e)=>{
    return { label:e.label,data:e.data,backgroundColor:getRandomColor() }
  })
    const labels = [2017, 2018, 2019, 2020, 2021, 2022, 2023];
    const Chartdata = { labels : data.label,
        datasets: dataset
          }

    
    const options={
    plugins: {
        title: {
            display: true,
            text: 'Comperison',
          },
        },
        responsive: true,
        scales: {
            xAxes: [{
                //stacked: true,
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  maxRotation: 0,
                  minRotation: 0
                }
              }],
              yAxes: [{
                stacked: true,
              }],
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

export default CompareStackedChart
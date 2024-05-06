import React from 'react'
import GanttChart from '../../output/ganntChart/GanttChart.tsx'
import ComputeCSS from './Compute.module.css'

export default function Compute(props: any) {
  const [displayGanttChart, setDisplayGanttChart] = React.useState(false)


  return (
    <>
      {
        displayGanttChart ? <GanttChart burstTimes={props.burstTimes} /> : null
      }
      <button className={ComputeCSS['compute-button']} onClick={() => {
        console.log(props.burstTimes)
        setDisplayGanttChart(true)
      }}>Compute</button>
    </>
  )
}
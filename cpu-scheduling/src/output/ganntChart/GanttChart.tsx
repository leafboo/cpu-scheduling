import React from 'react'
import Process from './process/Process.tsx'
import GanttChartCSS from './GanttChart.module.css'

export default function GanttChart(props: any) {
  length = props.burstTimes.length
  let array: any = []

  function makeProcesses() {
    for(let i = 0; i < length; i++) {
      array.push(<Process processNumber={i + 1} />)
   }
  }
  
  makeProcesses()
  
  return (
    <div className={GanttChartCSS['gantt-chart-container']}>
      { array }
    </div>
  )
} 
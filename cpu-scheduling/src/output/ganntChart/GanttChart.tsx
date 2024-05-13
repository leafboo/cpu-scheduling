import React from 'react'
import Process from './process/Process.tsx'
import GanttChartCSS from './GanttChart.module.css'

export default function GanttChart(props: any) {
  const ProcessElement = props.results['Process'].map( (process: number) => 
    <Process processNumber={process}/>
  )
  
  return (
    <div className={GanttChartCSS['gantt-chart-container']}>
      { ProcessElement }
    </div>
  )
} 
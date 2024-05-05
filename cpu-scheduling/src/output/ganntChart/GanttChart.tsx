import React from 'react'
import Process from './process/Process.tsx'
import GanttChartCSS from './GanttChart.module.css'

export default function GanttChart() {
  return (
    <div className={GanttChartCSS['gantt-chart-container']}>
      <Process processNumber={1}/>
      <Process processNumber={2}/>
      <Process processNumber={3}/>
    </div>
  )
} 
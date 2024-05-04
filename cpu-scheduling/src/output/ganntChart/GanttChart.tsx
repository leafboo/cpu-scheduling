import React from 'react'
import GanttChartCSS from './GanttChart.module.css'

export default function GanttChart() {
  return (
    <div className={GanttChartCSS['gantt-chart-container']}>
      <span className={GanttChartCSS['process']}>P1</span>
      <span className={GanttChartCSS['process']}>P2</span>
      <span className={GanttChartCSS['process']}>P3</span>
    </div>
  )
} 
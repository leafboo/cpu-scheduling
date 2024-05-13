import React from 'react'
import Process from './process/Process.tsx'
import GanttChartCSS from './GanttChart.module.css'

export default function GanttChart(props: any) {
  const ProcessElement = props.results['Process'].map( (process: number) => 
    <Process processNumber={process}/>
  );
  const newResults = [0, ...props.results['Completion Time']];
  const CompletionTimeElement = newResults.map((ct) => 
    <span>{ct}</span>
  )

  
  return (
    <>
      <div className={GanttChartCSS['gantt-chart-container']}>
        { ProcessElement }
      </div>
      <div className={GanttChartCSS['completion-times']}>
        {CompletionTimeElement}
      </div>
    </>
    
  )
} 
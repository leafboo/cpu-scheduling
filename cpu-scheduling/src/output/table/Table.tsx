import React from 'react'
import TableCSS from './Table.module.css'

export default function Table(props: any) {
  const separatedProcess = props.results["Process"] ? props.results["Process"].join(', ') : '';
  const separatedBurstTime = props.results["Burst Time"] ? props.results["Burst Time"].join(', ') : '';
  const separatedArrivalTime = props.results["Arrival Time"] ? props.results["Arrival Time"].join(', ') : '';
  const separatedCompletionTime = props.results["Completion Time"] ? props.results["Completion Time"].join(', ') : '';


  return (
    <div className={TableCSS['table-container']}>
      <div>
        Process: {separatedProcess}
      </div>
      <div>
        Arrival Time: {separatedArrivalTime}
      </div>
      <div>
        Burst Time: {separatedBurstTime}
      </div>
      <div>
        Completion Time: {separatedCompletionTime}
      </div>
      <div>
        Turnaround Time
      </div>
      <div>
          Waiting Time
      </div>
    </div>
  )
}
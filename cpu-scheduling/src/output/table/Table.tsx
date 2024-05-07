import React from 'react'
import TableCSS from './Table.module.css'

export default function Table(props: any) {
  //const separatedProcess = props.results["Process"] ? props.results["Processs"].join(', ') : '';
  const separatedArrivalTime = props.results["Burst Time"] ? props.results["Burst Time"].join(', ') : '';
  return (
    <div className={TableCSS['table-container']}>
      <div>
        Process: {/*separatedProcess*/}
      </div>
      <div>
        Arrival Time
      </div>
      <div>
        Burst Time: {separatedArrivalTime}
      </div>
      <div>
        Completion Time
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
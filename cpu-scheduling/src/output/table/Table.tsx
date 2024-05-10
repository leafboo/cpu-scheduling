import React from 'react'
import TableCSS from './Table.module.css'

export default function Table(props: any) {
  

  const process = props.results["Process"].map((process: any, index:number) => <div key={`${process}-${index}`}>{process}</div>)
  const arrivalTime = props.results["Arrival Time"].map((process: any, index:number) => <div key={`${process}-${index}`}>{process}</div>)
  const burstTime = props.results["Burst Time"].map((process: any, index:number) => <div key={`${process}-${index}`}>{process}</div>)
  const completionTime = props.results["Completion Time"].map((process: any, index:number) => <div key={`${process}-${index}`}>{process}</div>)
  const turnaroundTime = props.results["Turnaround Time"].map((process: any, index:number) => <div key={`${process}-${index}`}>{process}</div>)
  const waitingTime = props.results["Waiting Time"].map((process: any, index:number) => <div key={`${process}-${index}`}>{process}</div>)





 
  return (
    <div className={TableCSS['table-container']}>
      <div className={TableCSS['process-container']}>
        process
        {process}
      </div>
      <div className={TableCSS['arrival-time-container']}>
        arrival time
        {arrivalTime}
      </div>
      <div className={TableCSS['burst-time-container']}>
        burst time
        {burstTime}
      </div>
      <div className={TableCSS['completion-time-container']}>
        completion time
        {completionTime}
      </div>
      <div className={TableCSS['turnaround-time-container']}>
       turnaround time
       {turnaroundTime}
      </div>
      <div className={TableCSS['waiting-time-container']}>
        waiting time
        {waitingTime}
      </div>
    </div>
  )
}
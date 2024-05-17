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
        <span>process</span>
        {process}
      </div>
      <div className={TableCSS['arrival-time-container']}>
        <span>arrival time</span>
        {arrivalTime}
      </div>
      <div className={TableCSS['burst-time-container']}>
        <span>burst time</span>
        {burstTime}
      </div>
      <div className={TableCSS['completion-time-container']}>
        <span>completion time</span>
        {completionTime}
        <br /><br />
        Total:
      </div>
      <div className={TableCSS['turnaround-time-container']}>
       <span>turnaround time</span>
       {turnaroundTime}
       <br /><br />
       {props.averageTurnaroundTime}
      </div>
      <div className={TableCSS['waiting-time-container']}>
        <span>waiting time</span>
        {waitingTime}
        <br /><br />
        {props.averageWaitingTime}
      </div>
    </div>
  )
}
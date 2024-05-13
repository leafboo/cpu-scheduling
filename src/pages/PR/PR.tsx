import React from 'react'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import Compute from '../../buttons/Compute/Compute.tsx'
import PRCSS from './PR.module.css'

export default function PR(props: any) {
  const [tempBurstTime, setTempBurstTime] = React.useState([])
  

  let processes = [];
  let arrivalTimes = [];
  let completionTime = [];
  let sum = 0;
  let turnaroundTime = [];
  let waitingTime = [];

  for (let i = 0; i < props.results["Burst Time"].length; i ++) {
    processes.push(i + 1);
    arrivalTimes.push(i);
    sum += props.results["Burst Time"][i]
    completionTime.push(sum)
    turnaroundTime.push(completionTime[i] - arrivalTimes[i])
    waitingTime.push(turnaroundTime[i] - props.results["Burst Time"][i])
  }
  
  React.useEffect(() => {
    props.setResults((prevState: any) => ({
      ...prevState,
      "Process": processes,
      "Arrival Time": arrivalTimes,
      "Completion Time": completionTime,
      "Turnaround Time": turnaroundTime,
      "Waiting Time": waitingTime
    }));
  }, [props.results["Burst Time"]])
 
  return (
    <div className={PRCSS['pr-container']}>
      <div>PR</div>
      <GoBack changePage={props.changePage}
              pageNumber={2} />

      <div>
        <label htmlFor="burst-times">Burst times:</label>
        <br />
        <input type="text" name="" id="burst-times" onChange={(event) => { 
                let value: any = event.target.value;
                console.log(value)
                
                setTempBurstTime(value.split(" ").map(Number))
              }} placeholder='e.g. 9 2 6 4' />
        <br />
        <label htmlFor="priority">Priority:</label>
        <br />
        <input type="text" name="" id="priority" onChange={(event) => {
          let value = event.target.value
          if (props.results["Priority"]) {
            const indices = Array.from(tempBurstTime.keys());
          indices.sort((a: any, b: any) => props.results["Priority"][a] - props.results["Priority"][b]);
            
            props.setResults((prevState: any) => ({
              ...prevState,
              "Burst Time": indices.map((index: any) => tempBurstTime[index])
            }))
          }
          
          
          props.setResults((prevState: any) => ({
            ...prevState,
            "Priority": value.split(" ").map(Number)
          }))
        }} placeholder='e.g. 2 1 0 3' />
      </div>
      <Compute results={props.results} />
    </div>
  )
}
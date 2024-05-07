import React from 'react'
import Compute from '../../buttons/Compute/Compute.tsx'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import FCFSCSS from './FCFS.module.css'

export default function FCFS(props: any) {
  let processes = [];
  let arrivalTimes = [];
  let completionTime = [];
  let sum = 0;
  let turnaroundTime = [];
  
  for (let i = 0; i < props.results["Burst Time"].length; i ++) {
    processes.push(i + 1);
    arrivalTimes.push(i);
    sum += props.results["Burst Time"][i]
    completionTime.push(sum)
    turnaroundTime.push(completionTime[i] - arrivalTimes[i])
  }
  console.log(props.results["Turnaround Time"])
  React.useEffect(() => {
    props.setResults((prevState: any) => ({
      ...prevState,
      "Process": processes,
      "Arrival Time": arrivalTimes,
      "Completion Time": completionTime,
      "Turnaround Time": turnaroundTime
    }));
  }, [props.results["Burst Time"]])

  

  return (
      <div className={FCFSCSS['fcfs-container']}>
        <div>FCFS</div>
        <GoBack changePage={props.changePage}
                pageNumber={2} />
        <div>
          <label htmlFor="burst-times">Burst times:</label>
          <br />
          <input type="text" name="" id="burst-times" onChange={(event) => { 
                let value = event.target.value;
                console.log(value)
                
                props.setResults((prevState: any) => ({
                  ...prevState,
                  "Burst Time": value.split(" ").map(Number)
                }));
              }} placeholder='e.g. 9 2 6 4' />
        </div>
        <Compute results={props.results} />
      </div>
     
  )
}
import React from 'react'
import Compute from '../../buttons/Compute/Compute.tsx'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import FCFSCSS from './FCFS.module.css'

export default function FCFS(props: any) {
  let processes = [];
  let arrivalTimes = [];
  let completionTime = [];
  let sum = 0;
  
  for (let i = 0; i < props.results["Burst Time"].length; i ++) {
    processes.push(i + 1);
    arrivalTimes.push(i);
    sum += props.results["Burst Time"][i]
    completionTime.push(sum)
  }
  console.log(props.results["Completion Time"])
  React.useEffect(() => {
    props.setResults((prevState: any) => ({
      ...prevState,
      "Process": processes,
      "Arrival Time": arrivalTimes,
      "Completion Time": completionTime
    }));
  }, [props.results["Burst Time"]])

  console.log(props.results["Completion Time"])

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
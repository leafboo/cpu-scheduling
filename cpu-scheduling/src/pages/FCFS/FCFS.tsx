import React from 'react'
import Compute from '../../buttons/Compute/Compute.tsx'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import FCFSCSS from './FCFS.module.css'

export default function FCFS(props: any) {
  let processes: any = []
  function addProcesses() {
    if (props.results["Burst Times"]) {
      for (let i = 1; i <= props.results["Burst Times"].length; i++) {
        processes.push(i)
      }
    }
    
  }
 
  return (
      <div className={FCFSCSS['fcfs-container']}>
        <div>FCFS</div>
        <GoBack changePage={props.changePage}
                pageNumber={2} />
        <div>
          <label htmlFor="burst-times">Burst times:</label>
          <br />
          <input type="text" name="" id="burst-times" onChange={(event) => { 
                let value = event.target.value
                addProcesses()
                props.setResults((prevState: any) => ({
                  ...prevState,
                  "Process": processes,
                  "Burst Time": value.split(" ").map(Number),
                }));
              }} placeholder='e.g. 9 2 6 4' />
        </div>
        <Compute results={props.results} />
      </div>
     
  )
}
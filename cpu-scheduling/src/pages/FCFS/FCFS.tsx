import React from 'react'
import Compute from '../../buttons/Compute/Compute.tsx'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import FCFSCSS from './FCFS.module.css'

export default function FCFS(props: any) {
  return (
    <div className={FCFSCSS['fcfs-container']}>
      <div>FCFS</div>
      <GoBack changePage={props.changePage}
              pageNumber={2} />

      <div>
        <label htmlFor="burst-times">Burst times:</label>
        <br />
        <input type="text" name="" id="burst-times" />
      </div>
      <Compute />
    </div>
  )
}
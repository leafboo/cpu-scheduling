import React from 'react'
import Compute from '../../buttons/Compute/Compute.tsx'
import FCFSCSS from './FCFS.module.css'

export default function FCFS(props: any) {
  return (
    <div className={FCFSCSS['fcfs-container']}>
      <div>FCFS</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>

      <div>
        <label htmlFor="burst-times">Burst times:</label>
        <br />
        <input type="text" name="" id="burst-times" />
      </div>
      <Compute />
    </div>
  )
}
import React from 'react'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import Compute from '../../buttons/Compute/Compute.tsx'
import RRCSS from './RR.module.css'

export default function RR(props: any) {
  return (
    <div className={RRCSS['rr-container']}>
      <div>RR</div>
      <GoBack changePage={props.changePage}
              pageNumber={2} />

      <div>
        <label htmlFor="arrival-times">Arrival times:</label>
        <br />
        <input type="text" name="" id="arrival-times" />
        <br />
        <label htmlFor="burst-times">Burst times:</label>
        <br />
        <input type="text" name="" id="burst-times" />
        <br />
        <label htmlFor="time-quantum">Time quantum:</label>
        <br />
        <input type="text" name="" id="time-quantum" />
      </div>
      <Compute />
    </div>
  )
}
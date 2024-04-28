import React from 'react'
import RRCSS from './RR.module.css'

export default function RR(props: any) {
  return (
    <div className={RRCSS['rr-container']}>
      <div>RR</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>

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
    </div>
  )
}
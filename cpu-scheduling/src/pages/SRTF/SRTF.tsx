import React from 'react'
import SRTFCSS from './SRTF.module.css'

export default function SRTF(props: any) {
  return (
    <div className={SRTFCSS['srtf-container']}>
      <div>SRTF</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>

      <div>
        <label htmlFor="arrival-times">Arrival times:</label>
        <br />
        <input type="text" name="" id="arrival-times" />
        <br />
        <label htmlFor="burst-times">Burst times:</label>
        <br />
        <input type="text" name="" id="burst-times" />
      </div>
    </div>
  )
}
import React from 'react'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import Compute from '../../buttons/Compute/Compute.tsx'
import SRTFCSS from './SRTF.module.css'

export default function SRTF(props: any) {
  return (
    <div className={SRTFCSS['srtf-container']}>
      <div>SRTF</div>
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
      </div>
      <Compute />
    </div>
  )
}
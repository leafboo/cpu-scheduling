import React from 'react'
import Compute from '../../buttons/Compute/Compute.tsx'
import PRCSS from './PR.module.css'

export default function PR(props: any) {
  return (
    <div className={PRCSS['pr-container']}>
      <div>PR</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>

      <div>
        <label htmlFor="burst-times">Burst times:</label>
        <br />
        <input type="text" name="" id="burst-times" />
        <br />
        <label htmlFor="priority">Priority:</label>
        <br />
        <input type="text" name="" id="priority" />
      </div>
      <Compute />
    </div>
  )
}
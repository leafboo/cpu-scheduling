import React from 'react'
import SJFCSS from './SJF.module.css'

export default function SJF(props: any) {
  return (
    <div className={SJFCSS['sjf-container']}>
      <div>SJF</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>  

      <div>
        <label htmlFor="burst-times">Burst times:</label>
        <br />
        <input type="text" name="" id="burst-times" />
      </div>  
    </div>
  )
}
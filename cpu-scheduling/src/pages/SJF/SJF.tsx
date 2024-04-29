import React from 'react'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import Compute from '../../buttons/Compute/Compute.tsx'
import SJFCSS from './SJF.module.css'

export default function SJF(props: any) {
  return (
    <div className={SJFCSS['sjf-container']}>
      <div>SJF</div>
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
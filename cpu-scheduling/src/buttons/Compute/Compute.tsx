import React from 'react'
import ComputeCSS from './Compute.module.css'

export default function Compute(props: any) {
  return (
    <>
      <button className={ComputeCSS['compute-button']} onClick={() => {
        console.log(props.burstTimes)
      }}>Compute</button>
    </>
  )
}
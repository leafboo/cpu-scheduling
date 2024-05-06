import React from 'react'
import Table from '../../output/table/Table.tsx'
import ComputeCSS from './Compute.module.css'

export default function Compute(props: any) {


  return (
    <>
      <button className={ComputeCSS['compute-button']} onClick={() => {
        console.log(props.results["Burst Times"])

      }}>Compute</button>
    </>
  )
}
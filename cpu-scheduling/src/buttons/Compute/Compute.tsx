import React from 'react'
import ComputeCSS from './Compute.module.css'

export default function Compute() {
  return (
    <>
      <button className={ComputeCSS['compute-button']}>Compute</button>
    </>
  )
}
import React from 'react'
import Table from '../../output/table/Table.tsx'
import ComputeCSS from './Compute.module.css'

export default function Compute(props: any) {
  const [isButtonPressed, setIsButtonPressed] = React.useState(false)

  return (
    <>
      <button className={ComputeCSS['compute-button']} onClick={() => {
        setIsButtonPressed(true)

      }}>Compute</button>
      {
        isButtonPressed ? <Table results={props.results} /> : null
      }
      
    </>
  )
}
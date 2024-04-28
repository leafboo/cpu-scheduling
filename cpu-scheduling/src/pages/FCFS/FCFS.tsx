import React from 'react'

export default function FCFS(props: any) {
  return (
    <>
      <div>FCFS</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>
    </>
  )
}
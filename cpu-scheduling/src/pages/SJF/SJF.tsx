import React from 'react'

export default function SJF(props: any) {
  return (
    <>
      <div>SJF</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>     
    </>
  )
}
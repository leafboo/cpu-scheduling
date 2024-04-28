import React from 'react'

export default function RR(props: any) {
  return (
    <>
      <div>RR</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>
    </>
  )
}
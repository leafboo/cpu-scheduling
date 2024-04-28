import React from 'react'

export default function PR(props: any) {
  return (
    <>
      <div>PR</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>
    </>
  )
}
import React from 'react'

export default function Algorithm(props: any) {
  return (
    <>
      <button onClick={() => { props.changePage(props.pageNumber) }}>{props.name}</button>
    </>
  )
}
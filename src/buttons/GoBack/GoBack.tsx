import GoBackCSS from './GoBack.module.css'

export default function GoBack(props: any) {
  return (
    <>
      <button className={GoBackCSS['back-button']} onClick={() => { props.changePage(props.pageNumber) }}>Go Back</button>     
    </>
  )
}
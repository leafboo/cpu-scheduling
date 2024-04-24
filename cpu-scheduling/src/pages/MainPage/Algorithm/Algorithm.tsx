
export default function Algorithm(props: any) {

  const algorithms = props.algorithms.map((algorithm: any) => 
    <option value="">{algorithm.name}</option>
  )

  return (
    <div>
      <div>Algorithm:</div>
      <select name="" id="">
        {algorithms}
      </select>
    </div>
  )
}

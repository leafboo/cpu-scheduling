export default function ArrivalTimes(props: any) {

  // Apply debounce to input tag
  let arrivalTime;

  return (
    <div>
      <div>Arrival Time</div>
      <input type="text" name="" id="arrival-time" placeholder="Enter spaced numbers (e.g., 1 2 3)" onChange={(event) => { arrivalTime = event.target.value }} />
    </div>
  )

}


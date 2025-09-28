import { addMonths, subMonths } from "date-fns";

function Navigation({ currentDate, setCurrentDate }) {
  function handelToday() {
    setCurrentDate(new Date());
  }
  function handelprev() {
    let prev = subMonths(currentDate, 1);
    setCurrentDate(prev);
  }
  function handelnext() {
    let next = addMonths(currentDate, 1);
    setCurrentDate(next);
  }
  return (
    <div>
      <button onClick={handelprev}>Previous</button>
      <button onClick={handelToday}>Today</button>
      <button onClick={handelnext}>Next</button>
    </div>
  );
}

export default Navigation;

import {
  eachDayOfInterval,
  endOfWeek,
  isWithinInterval,
  format,
  differenceInDays,
} from "date-fns";
import DayCell from "./DayCell";

const WeekRow = ({ weekStart, month, allHolidays }) => {
  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 0 });
  // console.log(weekEnd);
  const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });
  // console.log(daysInWeek);
  // color logic

  const holidaysInThisWeek = allHolidays.filter((holiday) => {
    return isWithinInterval(new Date(holiday.date.iso), {
      start: weekStart,
      end: weekEnd,
    });
  });

  console.log(holidaysInThisWeek);
  const uniqueDays = new Set();

  for (let i = 0; i < holidaysInThisWeek.length; i++) {
    uniqueDays.add(holidaysInThisWeek[i].date.iso);
  }
  let py, pm, pd;
  let flag = false;
  holidaysInThisWeek.forEach((v) => {
    console.log(v);
    let y = v.date.datetime.year;
    let m = v.date.datetime.month;
    let d = v.date.datetime.day;

    if (!py || !pm || !pd) {
      py = y;
      pm = m;
      pd = d;
    } else {
      console.log(differenceInDays(new Date(y, m, d), new Date(py, pm, pd)));
      if (differenceInDays(new Date(y, m, d), new Date(py, pm, pd)) == 1) {
        flag = true;
      }
    }
    py = y;
    pm = m;
    pd = d;
  });
  console.log(flag);
  let rowClassName = "week-row";
  if (flag) {
    rowClassName += " yellow";
  } else if (uniqueDays.size === 1) {
    rowClassName += " light-green";
  } else if (uniqueDays.size > 1) {
    rowClassName += " pink";
  }

  return (
    <tr className={rowClassName}>
      {daysInWeek.map((day, index) => (
        <DayCell
          key={index}
          day={day}
          month={month}
          holidays={holidaysInThisWeek.filter(
            (h) =>
              format(new Date(h.date.iso), "yyyy-MM-dd") ===
              format(day, "yyyy-MM-dd")
          )}
        />
      ))}
    </tr>
  );
};

export default WeekRow;

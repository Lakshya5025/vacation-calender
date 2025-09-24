import {
  eachDayOfInterval,
  endOfWeek,
  isWithinInterval,
  format,
} from "date-fns";
import DayCell from "./DayCell";

const WeekRow = ({ weekStart, month, allHolidays }) => {
  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 0 });
  const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

  // --- CORE COLORING LOGIC ---
  const holidaysInThisWeek = allHolidays.filter((holiday) =>
    isWithinInterval(new Date(holiday.date.iso), {
      start: weekStart,
      end: weekEnd,
    })
  );

  let rowClassName = "week-row";
  if (holidaysInThisWeek.length === 1) {
    rowClassName += " light-green";
  } else if (holidaysInThisWeek.length > 1) {
    rowClassName += " dark-green";
  }
  // -------------------------

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

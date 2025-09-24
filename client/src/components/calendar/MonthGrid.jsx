import { eachWeekOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import WeekRow from "./WeekRow";

const MonthGrid = ({ month, year, allHolidays }) => {
  const startDate = startOfMonth(new Date(year, month));
  const endDate = endOfMonth(startDate);

  const weeks = eachWeekOfInterval(
    {
      start: startDate,
      end: endDate,
    },
    { weekStartsOn: 0 }
  );

  return (
    <div className="month-grid">
      <h2>{format(startDate, "MMMM yyyy")}</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((weekStart, index) => (
            <WeekRow
              key={index}
              weekStart={weekStart}
              month={month}
              allHolidays={allHolidays}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthGrid;

import { format, getMonth } from "date-fns";

const DayCell = ({ day, month, holidays }) => {
  const isCurrentMonth = getMonth(day) === month;
  const dayClassName = isCurrentMonth ? "day-cell" : "day-cell other-month";

  return (
    <td className={dayClassName}>
      <div className="day-number">{format(day, "d")}</div>
      <div className="holidays">
        {holidays.map((h) => (
          <div key={h.date} className="holiday-name">
            {h.name}
          </div>
        ))}
      </div>
    </td>
  );
};

export default DayCell;

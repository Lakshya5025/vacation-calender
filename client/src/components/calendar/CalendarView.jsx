import { getQuarter } from "date-fns";
import MonthGrid from "./MonthGrid";

const CalendarView = ({ view, currentDate, allHolidays }) => {
  const year = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const renderMonthGrids = () => {
    if (view == "quarterly") {
      const quarter = getQuarter(currentDate);
      const startMonth = (quarter - 1) * 3;
      return [0, 1, 2].map((m) => (
        <MonthGrid
          key={startMonth + m}
          month={startMonth + m}
          year={year}
          allHolidays={allHolidays}
        />
      ));
    } else if (view == "yearly") {
      return Array.from({ length: 12 }, (_, i) => (
        <MonthGrid key={i} month={i} year={year} allHolidays={allHolidays} />
      ));
    } else {
      return (
        <MonthGrid month={currentMonth} year={year} allHolidays={allHolidays} />
      );
    }
  };

  return <div className={`calendar-view ${view}`}>{renderMonthGrids()}</div>;
};

export default CalendarView;

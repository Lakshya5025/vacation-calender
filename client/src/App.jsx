import { useState, useEffect } from "react";
import "./assets/App.css";
import CountrySelector from "./components/CountrySelector";
import CalendarView from "./components/calendar/CalendarView";
import ViewSwitcher from "./components/ViewSwitcher";
import { fetchLocation, fetchPublicHolidays } from "./api/apiService";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [holidays, setHolidays] = useState([]);
  const [currentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("monthly");

  useEffect(() => {
    const getInitialLocation = async () => {
      const location = await fetchLocation();
      if (location && location.countryCode) {
        setSelectedCountry(location.countryCode);
      }
    };
    getInitialLocation();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setLoading(true);
      const year = currentDate.getFullYear();
      const getHolidays = async () => {
        const fetchedHolidays = await fetchPublicHolidays(
          selectedCountry,
          year
        );
        setHolidays(fetchedHolidays);
        setLoading(false);
      };
      getHolidays();
    }
  }, [selectedCountry, currentDate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vacation Calendar</h1>
        <CountrySelector
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <ViewSwitcher currentView={view} setCurrentView={setView} />

        {loading ? (
          <p>Loading holidays...</p>
        ) : (
          <CalendarView
            view={view}
            currentDate={currentDate}
            allHolidays={holidays}
          />
        )}
      </header>
    </div>
  );
}

export default App;

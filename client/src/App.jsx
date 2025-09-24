import React, { useState, useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import MonthGrid from "./components/calendar/MonthGrid"; //
import { fetchLocation, fetchPublicHolidays } from "./api/apiService";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [holidays, setHolidays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  // 1. Fetch the initial location when the app loads
  useEffect(() => {
    const getInitialLocation = async () => {
      const location = await fetchLocation();
      if (location && location.countryCode) {
        setSelectedCountry(location.countryCode);
      }
    };
    getInitialLocation();
  }, []);

  // 2. Fetch holidays whenever the selected country or year changes
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
    <div className="app">
      <header className="App-header">
        <h1>Vacation Calendar</h1>
        <CountrySelector
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

        {loading ? (
          <p>Loading holidays...</p>
        ) : (
          <MonthGrid
            month={currentDate.getMonth()}
            year={currentDate.getFullYear()}
            allHolidays={holidays}
          />
        )}
      </header>
    </div>
  );
}

export default App;

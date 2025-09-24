import { countries } from "../assets/countries";

const CountrySelector = ({ selectedCountry, setSelectedCountry }) => {
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="country-selector">
      <label htmlFor="country-select">Select a Country: </label>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;

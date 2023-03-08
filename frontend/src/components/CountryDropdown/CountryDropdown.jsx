import React from "react";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  // add more countries here
];

function CountryDropdown() {
  return (
    <select className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}

export default CountryDropdown;

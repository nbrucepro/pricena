import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  // add more countries here
];

function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = React.useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="country-select-label">Country</InputLabel>
      <Select
        labelId="country-select-label"
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}
      >
        {countries.map((country) => (
          <MenuItem key={country} value={country}>
            {/* {country} */} 
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountryDropdown;




// import React from "react";

// const countries = [
//   "United States",
//   "Canada",
//   "Mexico",
//   // add more countries here
// ];

// function CountryDropdown() {
//   return (
//     <select className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
//       {countries.map((country) => (
//         <option key={country} value={country}>
//           {country}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default CountryDropdown;

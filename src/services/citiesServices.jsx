const cities = [
  { city: "Mérida", country: "México", countryCode: "MX" },
  { city: "Monterrey", country: "México", countryCode: "MX" },
  // {city: "Guadalajara", country: "México", countryCode: "MX"},
  { city: "Bogotá", country: "Colombia", countryCode: "CO" },
];

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (cities.filter(c => c.countryCode === countryCode)[0].country);

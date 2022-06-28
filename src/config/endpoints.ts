const endpoints = {
  GET_CURRENT_LOCATION: (location: any) => `current/location=${location.lon},${location.lat}`,
  GET_CITIES: (cityName: string) => `location/search/${cityName}`,
  GET_CITY_BY_ID: (id: string) => `forecast/daily/${id}`,
  GET_HOURLY_FORECAST_BY_ID: (id: string) => `forecast/hourly/${id}`
};

export default endpoints;

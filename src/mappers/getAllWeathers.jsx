import { getCityCode, toCelcius } from "./../utils/utils";
import { validValues } from './../components/IconState/IconState';

const getAllWeathers = (response, city, countryCode) => {
  const { data } = response;
  const temperature = toCelcius(data.main.temp);
  const stateFromServer = data.weather[0].main.toLowerCase();
  const state = validValues.includes(stateFromServer) ? stateFromServer : null;

  const propName = getCityCode(city, countryCode);
  const propValue = { temperature, state };
  return {[propName]: propValue };
};

export default getAllWeathers;


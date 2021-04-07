//Funcion que retorna el city code
import convert from 'convert-units';
export const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

export const toCelcius = (temp) => Number(convert(temp).from("K").to("C").toFixed(0));

import { toCelcius } from "./../utils/utils";
import moment from "moment";
import "moment/locale/es";

const getForecastItemList = (data) => {
  const interval = [4, 8, 12, 16, 20, 24];

  const forecastItemListAux = data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      console.log("hour", moment.unix(item.dt));
      return {
        hour: moment.unix(item.dt).hour(),
        state: item.weather[0].main.toLowerCase(),
        temperature: toCelcius(item.main.temp),
        weekDay: moment.unix(item.dt).format("ddd"),
      };
    });

    return forecastItemListAux
};

export default getForecastItemList;

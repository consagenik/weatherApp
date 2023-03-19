import {ICity, IWeatherItem, IWeatherMain} from '../entities';
import {ApiCity, ApiWeatherItem, ApiWeatherMain} from './entities';

export function mapApiWeatherItemToIWeatherItem(
  weatherItem: ApiWeatherItem,
): IWeatherItem {
  return {
    id: weatherItem.id,
    main: weatherItem.main,
    description: weatherItem.description,
    icon: weatherItem.icon,
  };
}

export function mapApiWeatherMainToIWeatherMain(
  weatherMain: ApiWeatherMain,
): IWeatherMain {
  return {
    temp: weatherMain.temp,
    feels_like: weatherMain.feels_like,
    temp_min: weatherMain.temp_min,
    temp_max: weatherMain.temp_max,
    pressure: weatherMain.pressure,
    humidity: weatherMain.humidity,
  };
}

export function mapApiCityToICity(apiCity: ApiCity): ICity {
  return {
    id: apiCity.id,
    name: apiCity.name,
    weather: apiCity.weather.map(mapApiWeatherItemToIWeatherItem),
    main: mapApiWeatherMainToIWeatherMain(apiCity.main),
    isSelected: false,
  };
}

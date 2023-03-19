import ApiWeatherItem from './ApiWeatherItem';
import ApiWeatherMain from './ApiWeatherMain';

export default interface ApiCity {
  id: string;
  name: string;
  weather: ApiWeatherItem[];
  main: ApiWeatherMain;
}

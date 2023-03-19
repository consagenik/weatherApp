import IWeatherItem from './IWeatherItem';
import IWeatherMain from './IWeatherMain';

export default interface ICity {
  id: string;
  name: string;
  weather: IWeatherItem[];
  main: IWeatherMain;
  isSelected: boolean;
}

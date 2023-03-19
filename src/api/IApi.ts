import {ICity} from '../entities';
import {ApiResponse} from './entities';

export default interface IApi {
  searchCities(cityName: string): Promise<ApiResponse<ICity | undefined>>;
}

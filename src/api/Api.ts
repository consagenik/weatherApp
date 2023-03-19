import {ICity} from '../entities';
import {ApiResponse} from './entities';
import IApi from './IApi';
import {mapApiCityToICity} from './mappers';

export default class Api implements IApi {
  private myAPIKey: string = '08d77aff1cd879534c2b0d902ea9fc65';
  private baseUrl: string =
    'https://api.openweathermap.org/data/2.5/weather?q=';

  private async fetchData(
    path: string,
    requestOptions: any,
  ): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${path}&appid=${this.myAPIKey}&units=metric`,
        requestOptions,
      );
      const statusCode = response.status;
      const temp = await response.json();

      console.warn(
        'FETCH PATH',
        `${this.baseUrl}${path}&appid=${this.myAPIKey}`,
      );
      console.warn('FETCH', temp);

      temp.statusCode = statusCode;

      return {
        statusCode,
        data: temp,
      };
    } catch (e) {
      console.log('API ERROR:', e);
      throw new Error(`API line 174 ${e}`);
    }
  }

  private async getData(path: string): Promise<any> {
    const requestOptions = {
      method: 'GET',
    };

    return this.fetchData(path, requestOptions);
  }

  private async postData(path: string, data?: any): Promise<ApiResponse<any>> {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return this.fetchData(path, requestOptions);
  }

  public async searchCities(
    cityName: string,
  ): Promise<ApiResponse<ICity | undefined>> {
    const res = await this.getData(cityName);

    return {
      statusCode: res.statusCode,
      data: res.data ? mapApiCityToICity(res.data) : undefined,
    };
  }
}

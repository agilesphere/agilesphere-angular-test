import * as weatherActions from './weather';
import{ mockedWeatherData } from '../../../utility/mockAPI';

describe ('Weather actions ', function() {
    const city = mockedWeatherData.city.name;

    it('should create LOAD_CITY_WEATHER action', function() {
        const action = new weatherActions.LoadCityWeather(city);
        expect({...action}).toEqual({
            type: weatherActions.LOAD_CITY_WEATHER,
            payload: city
        });
    })

    it('should create LOAD_CITY_WEATHER_SUCCESS action', function() {
        const action = new weatherActions.LoadCityWeatherSuccess(mockedWeatherData);
        expect({...action}).toEqual({
            type: weatherActions.LOAD_CITY_WEATHER_SUCCESS,
            payload: mockedWeatherData
        });
    })

    it('should create LOAD_CITY_WEATHER_FAIL action', function() {
        const error = {code: 'ERROR', message:'error loading data'};
        const action = new weatherActions.LoadCityWeatherFail(error);
        expect({...action}).toEqual({
            type: weatherActions.LOAD_CITY_WEATHER_FAIL,
            payload: error
        });
    })
})
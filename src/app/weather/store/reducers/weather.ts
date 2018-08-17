import * as weatherActions from '../actions/weather';
import { AppState } from '../../store/state';
import * as _ from 'lodash';
import * as moment from 'moment';

export const initialState: AppState = {
    isLoading: false,
    cityFound: true,
    weather: [],
    hasError: false
};

export function reducer (state = initialState, action): AppState {
    switch(action.type) {
        case weatherActions.LOAD_CITY_WEATHER:
        return {
            ...state,
            isLoading: true
          };
        case weatherActions.LOAD_CITY_WEATHER_SUCCESS:
        const raw = action.payload;
        if (raw.list) {
          const cityData = {
            city: `${raw.city.name}, ${raw.city.country}`
          };
          raw.list.forEach((entry, i) => {
            if (i % 2 === 0) {
              const key = moment(entry.dt_txt).format('h a');
              cityData[key] = entry.main.temp;
            }
          });

          return {
            ...state,
            isLoading: false,
            hasError: false,
            cityFound: true,
            weather: _.uniqBy([...state.weather, cityData], (weather) => weather.city)
          };
        } else {
          return state;
        }
        case weatherActions.LOAD_CITY_WEATHER_FAIL:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                cityFound: false
            };
        default:
            return state;
    }
};

export const getIsLoading = (state: any) => state.isLoading;
export const getIsCityFound = (state: any) => state.cityFound;
export const getWeather = (state: any) => state.weather;
export const getHasError = (state: any) => state.hasError;
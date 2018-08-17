import * as weatherActions from '../actions/weather';
import { AppState } from '../../store/state';

export const initialState: AppState = {
    isLoading: false,
    cityFound: true,
    wheather: [],
    hasError: false
};

export function reducer (state = initialState, action): AppState {
    switch(action.state) {
        case weatherActions.LOAD_CITY_WEATHER:
            return state;
        case weatherActions.LOAD_CITY_WEATHER_SUCCESS:
            return state;
        case weatherActions.LOAD_CITY_WEATHER_FAIL:
            return state;
        default:
            return state;
    }
};

export const getIsLoading = (state: any) => state.isLoading;
export const getIsCityFound = (state: any) => state.cityFound;
export const getWeather = (state: any) => state.wheather;
export const getHasError = (state: any) => state.hasError;
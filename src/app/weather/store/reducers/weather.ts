import * as weatherActions from '../actions/weather';
import { AppState } from '../../store/state';
import * as _ from 'lodash';
import { updateObject, formatCityObject } from '../../../utility/utility';

export const initialState: AppState = {
    isLoading: false,
    weather: [],
    hasError: false
};

const loadCityWeather = (state, action) => {
  return updateObject(state, { isLoading: true });
};

const loadCityWeatherSuccess = (state, action) => {
  const raw = action.payload;
  if (raw.list) {

    const cityData = formatCityObject({ city: `${raw.city.name} - ${raw.city.country}` }, raw.list);

    return updateObject(state, {
      isLoading: false,
      hasError: false,
      weather: _.uniqBy([...state.weather, cityData], (weather) => weather.city)
    });

  } else {
      return state;
    }
};

const loadCityWeatherFail = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    hasError: true
  });
};

export function reducer (state = initialState, action): AppState {
    switch (action.type) {
        case weatherActions.LOAD_CITY_WEATHER: return loadCityWeather(state, action);
        case weatherActions.LOAD_CITY_WEATHER_SUCCESS: return loadCityWeatherSuccess(state, action);
        case weatherActions.LOAD_CITY_WEATHER_FAIL: return loadCityWeatherFail(state, action);
        default: return state;
    }
}

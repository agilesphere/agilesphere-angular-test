import { WeatherActions, WeatherActionTypes } from "../actions/weather";
import { Weather } from "../../../model/weather";

export interface WeatherState {
  weathers: Weather[];
}

export const initialState: WeatherState = {
  weathers: []
};

export function reducers(state = initialState, action: WeatherActions): WeatherState {

  switch (action.type) {
    case WeatherActionTypes.LoadWeather:       
      
      return {
        weathers: [...state.weathers, action.payload]
      };      

    default:
      return state;
  }
}
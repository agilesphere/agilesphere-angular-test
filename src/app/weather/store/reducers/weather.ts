import { WeatherActions, WeatherActionTypes } from "../actions/weather";
import { Weather } from "../../../model/weather";

export interface WeatherState {
  weathers: Weather[];
  failureMessage? : string;
}

export const initialState: WeatherState = {
  weathers: [],
  failureMessage: ''
};

export function reducers(state = initialState, action: WeatherActions): WeatherState {

  switch (action.type) {
    case WeatherActionTypes.LoadWeather:       
      
      return {
        weathers: [...state.weathers, action.payload]
      };      

    case WeatherActionTypes.LoadWeatherFail:       
      return  {...state, failureMessage : action.payload}

    default:
      return state;
  }
}
import * as actions from '../actions/weather';

export function weatherReducer(state, action) {
  switch (action.type) {
    case actions.LOAD_WEATHER: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.LOAD_WEATHER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}

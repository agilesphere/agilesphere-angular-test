import { reducers, initialState } from "./weather";
import { LoadWeather } from "../actions/weather";

describe("reducers", () => {

  it("should handle LoadWeather action and payload to store", () => {

    const payload = { city : {id: 123111, name: 'london'} };    
    const action = new LoadWeather(payload);

    const result = reducers(initialState, action);
    
    expect(result.weathers[0]).toEqual(payload);
  });
})
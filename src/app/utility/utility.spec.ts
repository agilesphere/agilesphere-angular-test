
import { updateObject, formatCityObject } from './utility';
import { mockedWeatherData } from './mockAPI';

describe('Utility service ', () => {

  it('updateObject should add properties to a given object', () => {
    const oldObject = { field1: 'value1'};
    const updatedProperties = {
        field2: 'value2',
        field3: true,
        field4: ['item1', 'item2']
    };

    const newObject = updateObject(oldObject, updatedProperties);
    expect(newObject).toEqual(jasmine.objectContaining({
        field1: 'value1',
        field2: 'value2',
        field3: true,
        field4: ['item1', 'item2']
    }));

  });

  it('formatCityObject should format the object with the display times 6am 12am 6pm 12pm', function() {
    const initObject = { city: `${mockedWeatherData.city.name} - ${mockedWeatherData.city.country}` };
    const formattedData = formatCityObject(initObject, mockedWeatherData.list);

    expect(formattedData).toEqual(jasmine.objectContaining({
        city: 'Rome - IT',
        '6pm': 26,
        '12am': 18,
        '6am': 21,
        '12pm': 30
    }));

  })

});

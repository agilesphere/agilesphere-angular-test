import * as moment from 'moment';
import { CONSTANTS } from './constants';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const formatCityObject = (initObj, properties) => {
    properties.forEach((entry, i) => {
        const key = moment(entry.dt_txt).format(CONSTANTS.TIME_FORMAT_TO_DISPLAY);
        if (CONSTANTS.TIMES_TO_DISPLAY.includes(key)) {
          initObj[key] = Math.round(entry.main.temp);
        }
      });

      return initObj;
};

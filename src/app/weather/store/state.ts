import { Summary } from '../../model/weather';

export interface AppState {
    isLoading: boolean,
    cityFound: boolean,
    weather: Summary[],
    hasError: boolean
}
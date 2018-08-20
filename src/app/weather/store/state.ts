import { Summary } from '../../model/weather';

export interface AppState {
    isLoading: boolean;
    weather: Summary[];
    hasError: boolean;
}

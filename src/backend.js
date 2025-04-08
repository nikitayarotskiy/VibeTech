import { getCountryData } from './api/getCountryData.js';

export class Backend {
    async getCountryData(country) {
        return await getCountryData(country);
    }
}

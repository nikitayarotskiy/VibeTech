import { getCountryData } from './api/getCountryData.js';
import { sendData } from './api/sendData.js';

export class Backend {
    async getCountryData(country) {
        return await getCountryData(country);
    }

    async sendUserData(formData) {
        return await sendData(formData);
    }
}

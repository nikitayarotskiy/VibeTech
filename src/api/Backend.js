import { setCountry } from './setCountry';
import { updateCountrData } from './updateCountryData';
import { getCountryData } from './getCountryData';

class Backend {
    constructor() {
        this.setCountry = setCountry;
        this.getCountryData = getCountryData;
    }

    updateCountrData(a) {
        updateCountrData(a);
    }
}

export default new Backend();

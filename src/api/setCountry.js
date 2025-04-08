import { API_ENDPOINTS } from './apiConfig';

export async function setCountry(countryId) {
    try {
        const response = await fetch(API_ENDPOINTS.SET_COUNTRY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ countryId: countryId })
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            console.error('Failed to set country');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

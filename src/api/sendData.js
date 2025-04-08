import { API_ENDPOINTS } from './apiConfig';

export async function sendData(formData) {
    try {
        const response = await fetch(API_ENDPOINTS.SEND_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            console.error('Failed to send user data');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

import { API_ENDPOINTS } from './apiConfig';

export async function updateCountrData(formData) {
    try {
        // Add validation for formData
        if (!formData || typeof formData !== 'object') {
            throw new Error('Invalid form data');
        }

        // Add request timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        const response = await fetch(API_ENDPOINTS.UPDATE_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            // Get more detailed error information
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error in updateDataApi:', error);
        // Return error object with more details
        return {
            success: false,
            error: error.message || 'Unknown error occurred'
        };
    }
}

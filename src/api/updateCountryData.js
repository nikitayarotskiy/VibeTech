import { API_ENDPOINTS } from './apiConfig';

export async function updateCountryData(formData) {
    try {
        const response = await fetch(API_ENDPOINTS.UPDATE_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(response)
        

        // Handle streaming JSON response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = '';

        
        for (let i = 0; i < 5000; i++) {
            const { done, value } = await reader.read();
            result += decoder.decode(value, { stream: true });
            setTimeout(0.1);
        }
        console.log(result)
        console.log("test")

        result += decoder.decode(); // Flush remaining bytes
        const jsonData = JSON.parse(result); // Parse the complete JSON
        console.log('API Response:', jsonData); // KEEPING THE FUCKING CONSOLE.LOG
        return jsonData;

    } catch (error) {
        console.error('Error updating country data:', error);
        throw error;
    }
}
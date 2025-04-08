export async function getCountryData(country) {
    try {
        const response = await fetch(`http://localhost:4000/api/lifeleap/getData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ country: country })
        });

        if (response.ok) {
            const result = await response.json();
            return result.response;
        } else {
            console.error('Failed to fetch items');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

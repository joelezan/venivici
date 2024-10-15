// util/api.js
export const fetchDog = async () => {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?size=small&api_key=live_vdjdLCEkdESv7igJ82H3Amu0rXYUkleTcFE2jOeUTYZS59ZdYQqpUdPiKOCEMoGW');
        const data = await response.json();

        // Check if the response contains the expected structure
        if (Array.isArray(data) && data.length > 0) {
            const dogData = data[0]; // Get the first dog object
            const breedInfo = dogData.breeds?.[0]; // Access the first breed info if available

            if (breedInfo) {
                return {
                    url: dogData.url, // Dog image URL
                    name: breedInfo.name, // Breed name
                    life_span: breedInfo.life_span, // Life span
                    temperament: breedInfo.temperament, // Temperament
                    height: breedInfo.height.imperial, // Height in imperial
                    weight: breedInfo.weight.imperial, // Weight in imperial
                    breed_group: breedInfo.breed_group || 'Unknown', // Breed group
                    bred_for: breedInfo.bred_for || 'Unknown' // Bred for purpose
                };
            } else {
                return {
                    url: dogData.url,
                    name: 'Unknown Breed',
                    life_span: 'Unknown',
                    temperament: 'Unknown',
                    height: 'Unknown',
                    weight: 'Unknown',
                    breed_group: 'Unknown',
                    bred_for: 'Unknown'
                };
            }
        } else {
            console.error('Unexpected response format:', data);
            return null;
        }
    } catch (error) {
        console.error('Error fetching dog:', error);
        return null;
    }
};

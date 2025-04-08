import React, { useState, useEffect } from 'react';

export default function VissualBox() {
    const [image, setImage] = useState('');
    const [populationData, setPopulationData] = useState([]);

    useEffect(() => {
        const generateImage = () => {
            const randomImage = `https://picsum.photos/800/400?random=1`;
            setImage(randomImage);
        };

        const fetchPopulationData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const populationStats = data.map(country => ({
                    name: country.name.common,
                    population: country.population
                }));
                setPopulationData(populationStats);
            } catch (error) {
                console.error('Error fetching population data:', error);
            }
        };

        generateImage();
        fetchPopulationData();
    }, []);

    return (
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl w-full max-w-4xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Population Visualization</h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <img 
                    src={image}
                    alt="population"
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="w-full mt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Population Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {populationData.slice(0, 4).map((country, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 font-medium">{country.name}</p>
                            <p className="text-gray-600">Population: {country.population.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>

            <p className="mt-4 text-gray-600 text-sm">Visual representation of population dynamics</p>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { LineChart, BarChart } from '@mui/x-charts';

export default function VissualBox() {
    const [image, setImage] = useState('');
    const [populationData, setPopulationData] = useState([]);
    const [chartData, setChartData] = useState([]);

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
                
                // Prepare chart data
                const topCountries = populationStats
                    .sort((a, b) => b.population - a.population)
                    .slice(0, 5);
                setChartData(topCountries);
            } catch (error) {
                console.error('Error fetching population data:', error);
            }
        };

        generateImage();
        fetchPopulationData();
    }, []);

    return (
        <div className="flex flex-col items-center p-8 bg-[#1a2e1a] rounded-2xl shadow-2xl w-full max-w-4xl border border-[#2d4a2d]">
            <h2 className="text-3xl font-bold text-[#d1e7dd] mb-6">Population Visualization</h2>
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#2d4a2d]">
                <img 
                    src={image}
                    alt="population"
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="w-full mt-6">
                <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">Population Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {populationData.slice(0, 4).map((country, index) => (
                        <div key={index} className="bg-[#2d4a2d] p-4 rounded-lg border border-[#1a2e1a] hover:border-[#4caf50] transition-all">
                            <p className="text-[#d1e7dd] font-medium">{country.name}</p>
                            <p className="text-[#a3c2a3]">Population: {country.population.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-8">
                <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">Population Trends</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#2d4a2d] p-4 rounded-lg">
                        <h4 className="text-lg font-medium text-[#d1e7dd] mb-2">Top 5 Countries</h4>
                        <div className="h-64">
                            <BarChart
                                xAxis={[{ 
                                    scaleType: 'band', 
                                    data: chartData.map(country => country.name) 
                                }]}
                                series={[{ 
                                    data: chartData.map(country => country.population), 
                                    color: '#4caf50' 
                                }]}
                            />
                        </div>
                    </div>
                    
                    <div className="bg-[#2d4a2d] p-4 rounded-lg">
                        <h4 className="text-lg font-medium text-[#d1e7dd] mb-2">Population Growth</h4>
                        <div className="h-64">
                            <LineChart
                                xAxis={[{ 
                                    data: [2020, 2025, 2030, 2035, 2040] 
                                }]}
                                series={[{
                                    data: [7.8, 8.1, 8.3, 8.4, 8.5],
                                    label: 'World Population (Billion)',
                                    color: '#4caf50'
                                }]}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-full mt-8">
                <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">AI Analysis</h3>
                <div className="bg-[#2d4a2d] p-6 rounded-lg">
                    <button 
                        className="bg-[#4caf50] hover:bg-[#3d8b40] text-[#d1e7dd] font-medium py-2 px-4 rounded-lg transition-colors"
                        onClick={async () => {
                            const response = await getAIResponse("Analyze the current population trends and provide insights");
                            console.log(response);
                            // You can add additional logic here to display the response in the UI
                        }}
                    >
                        Generate AI Insights
                    </button>
                </div>
            </div> */}

            <p className="mt-4 text-[#a3c2a3] text-sm">Visual representation of population dynamics</p>
        </div>
    );
}

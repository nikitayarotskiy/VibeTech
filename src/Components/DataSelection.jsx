import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Backend } from '../backend';

export default function DataSelection() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [flag, setFlag] = useState('');
    const [selectedCountryPopulation, setSelectedCountryPopulation] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isValidCountry, setIsValidCountry] = useState(false);
    const navigate = useNavigate();

    const backend = new Backend();

    const countries = [
        "Canada",
        "United States",
        "United Kingdom",
        "Australia",
        "Germany",
        "France",
        "Japan",
        "India",
        "Italy",
        "Spain",
        "Brazil",
        "Mexico",
        "Russia",
        "China",
        "South Korea",
        "Netherlands",
        "Sweden",
        "Norway",
        "New Zealand",
        "Singapore",
        "Switzerland",
        "South Africa",
        "Turkey",
        "Thailand",
        "Argentina",
        "Poland",
        "Portugal",
        "Greece",
        "Israel",
        "Ireland",
        "Malaysia",
        "Philippines"
    ];

    useEffect(() => {
        // Show the message by default when the component mounts
        setIsValidCountry(false);
    }, []);

    function handleInputChange(e) {
        setSelectedCountry(e.target.value);
        setIsValidCountry(false);
        setErrorMessage(null);
        setSelectedCountryPopulation(null);
    }

    async function calculatePopulation() {
        // try {
        //     let data = await backend.getCountryData(selectedCountry);
        //     if (data) {
        //         setFlag(data.flags);
        //         setSelectedCountryPopulation(data.population);
        //         setErrorMessage(null);
        //         setIsValidCountry(true);
        //     } else {
        //         setErrorMessage('Invalid country or failed to fetch population data.');
        //         setSelectedCountryPopulation(null);
        //         setIsValidCountry(false);
        //     }
        // } catch (error) {
        //     setErrorMessage('Error fetching population data.');
        //     setSelectedCountryPopulation(null);
        //     setIsValidCountry(false);
        // }

        setIsValidCountry(true);

    }

    function handleStart() {
        localStorage.setItem('country', selectedCountry);
        localStorage.setItem('population', selectedCountryPopulation);
        navigate('/');
    }

    return (
        <div className="w-full max-w-lg bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl border border-gray-100">
            <div className="form-control w-full">
                <label className="label mb-4">
                    <span className="text-gray-800 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Select Country
                    </span>
                </label>
                <div className="relative">
                    <input
                        list="countries"
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 placeholder-gray-400 bg-white shadow-sm"
                        placeholder="Choose a country"
                        value={selectedCountry}
                        onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <datalist id="countries">
                    {countries.map((country, index) => (
                        <option key={index} value={country} />
                    ))}
                </datalist>
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>

            <div className="w-full min-h-[120px] flex flex-col items-center justify-center my-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
                {!isValidCountry && (
                    <h2 className="text-gray-500 text-lg text-center font-medium">
                        Select a country to see population
                    </h2>
                )}

                {selectedCountryPopulation && (
                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-28 h-20 flex justify-center items-center overflow-hidden rounded-lg shadow-md border border-gray-100">
                            <img src={flag} alt="Country Flag" className="object-cover w-full h-full" />
                        </div>
                        <h3 className="text-gray-800 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Population: {selectedCountryPopulation.toLocaleString()}
                        </h3>
                    </div>
                )}

                {errorMessage && (
                    <div className="h-12 flex justify-center items-center">
                        <h3 className="text-red-500 text-lg font-semibold">
                            {errorMessage}
                        </h3>
                    </div>
                )}
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>

            {isValidCountry ? (
                <button
                    className="w-full h-16 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
                    onClick={handleStart}
                >
                    START
                </button>
            ) : (
                <button
                    className="w-full h-16 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white text-2xl font-bold hover:from-gray-900 hover:to-black transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
                    onClick={calculatePopulation}
                >
                    Check Population
                </button>
            )}
        </div>
    );
}

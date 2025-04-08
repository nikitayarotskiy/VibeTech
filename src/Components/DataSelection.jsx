import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCountryData } from '../api/getCountryData';
import { setCountry } from '../api/setCountry';

// Dev mode control
const DEV_MODE = true;
const TEST_COUNTRIES = [
    { id: 1, name: 'Test Country A', flag: 'https://flagcdn.com/us.svg' },
    { id: 2, name: 'Test Country B', flag: 'https://flagcdn.com/ca.svg' },
    { id: 3, name: 'Test Country C', flag: 'https://flagcdn.com/gb.svg' }
];

export default function DataSelection() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countries, setCountries] = useState(DEV_MODE ? TEST_COUNTRIES : []);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(!DEV_MODE);
    const navigate = useNavigate();

    useEffect(() => {
        if (DEV_MODE) return;

        const fetchCountries = async () => {
            try {
                const response = await getCountryData();
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setErrorMessage('Failed to load countries. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    function handleCountrySelect(country) {
        setSelectedCountry(country);
        localStorage.setItem('countryId', country.id);
        setErrorMessage(null);
    }

    async function handleStart() {
        if (!selectedCountry) {
            setErrorMessage('Please select a country');
            return;
        }
        
        try {
            if (!DEV_MODE) {
                await setCountry(selectedCountry.id)
            }
            navigate('/');
        } catch (error) {
            console.error('Error setting start country:', error);
            setErrorMessage('Failed to start simulation. Please try again.');
        }
    }

    return (
        <div className="w-full max-w-lg bg-[#1a2e1a] p-8 rounded-2xl shadow-2xl border border-[#2d4a2d]">
            <div className="form-control w-full">
                <label className="label mb-4">
                    <span className="text-[#d1e7dd] text-3xl font-bold">
                        Select Country
                    </span>
                </label>
                {loading ? (
                    <div className="text-center py-8">
                        <span className="text-[#d1e7dd]">Loading countries...</span>
                    </div>
                ) : (
                    <div className="w-full max-h-96 overflow-y-auto bg-[#1a2e1a]/50 rounded-xl border border-[#2d4a2d]/30">
                        {countries.length > 0 ? (
                            countries.map((country) => (
                                <div
                                    key={country.id}
                                    className={`flex items-center p-4 cursor-pointer hover:bg-[#2d4a2d]/50 transition-colors ${
                                        selectedCountry?.id === country.id ? 'bg-[#2d4a2d]/70' : ''
                                    }`}
                                    onClick={() => handleCountrySelect(country)}
                                >
                                    <img 
                                        src={country.flag} 
                                        alt={country.name} 
                                        className="w-8 h-6 mr-4 rounded-sm object-cover"
                                    />
                                    <span className="text-[#d1e7dd]">{country.name}</span>
                                </div>
                            ))
                        ) : (
                            <div className="p-4 text-center text-[#d1e7dd]">
                                No countries available. {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#2d4a2d] to-transparent my-6"></div>

            <div className="w-full min-h-[120px] flex flex-col items-center justify-center my-6 p-4 rounded-xl bg-[#2d4a2d] border border-[#1a2e1a]">
                {!selectedCountry && (
                    <h2 className="text-[#a3c2a3] text-lg text-center font-medium">
                        Select a country to begin
                    </h2>
                )}

                {selectedCountry && (
                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-28 h-20 flex justify-center items-center overflow-hidden rounded-lg shadow-md border border-[#1a2e1a]">
                            <img src={selectedCountry.flag} alt="Country Flag" className="object-cover w-full h-full" />
                        </div>
                        <h3 className="text-[#d1e7dd] text-xl font-bold">
                            {selectedCountry.name}
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

            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#2d4a2d] to-transparent my-6"></div>

            <button
                className="w-full h-16 rounded-xl bg-[#4caf50] text-[#d1e7dd] text-2xl font-bold hover:bg-[#3d8b40] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
                onClick={handleStart}
                disabled={!selectedCountry}
            >
                START
            </button>
        </div>
    );
}

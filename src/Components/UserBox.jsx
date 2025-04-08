import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { updateCountryData } from '../api/updateCountryData';

export default function UserBox() {
    const [formData, setFormData] = useState({
        gdp: 0,
        population: 0,
        costOfLiving: 0,
        healthcareQuality: 'good',
        diseaseSeverity: 0,
        diseasePrevalence: 0,
        immigrationRate: 0,
        fertilityRate: 2.1,
        mortalityRate: 0,
        healthcareResilience: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateCountryData(formData);
            if (response) {
                console.log('Data sent successfully:', response);
            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error sending user data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSliderChange = (name) => (e, newValue) => {
        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));
    };

    return (
        <div className="w-full max-w-2xl bg-gradient-to-br from-[#1a2e1a] to-[#0f1a0f] p-8 rounded-3xl shadow-2xl border border-[#2d4a2d]/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#d1e7dd] to-[#a8d5b9] bg-clip-text text-transparent mb-8">Population Dynamics Input</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* GDP */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">GDP</span>
                        </label>
                        <input
                            type="number"
                            name="gdp"
                            value={formData.gdp}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d]/30 bg-[#1a2e1a]/20 text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50]/50 focus:border-[#4caf50]/50 transition-all"
                            placeholder="Enter GDP"
                            min="0"
                        />
                    </div>

                    {/* Population */}
                    <div className="form-control bg[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Population</span>
                        </label>
                        <input
                            type="number"
                            name="population"
                            value={formData.population}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d]/30 bg-[#1a2e1a]/20 text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50]/50 focus:border-[#4caf50]/50 transition-all"
                            placeholder="Enter Population"
                            min="0"
                        />
                    </div>

                    {/* Cost of Living */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Cost of Living</span>
                        </label>
                        <Slider
                            value={formData.costOfLiving}
                            onChange={handleSliderChange('costOfLiving')}
                            aria-labelledby="cost-of-living-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={100}
                            sx={{
                                color: '#4caf50',
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#4caf50',
                                    boxShadow: '0 0 0 4px rgba(76, 175, 80, 0.2)',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#4caf50',
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#2d4a2d',
                                },
                            }}
                        />
                    </div>

                    {/* Healthcare Quality */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Healthcare Quality</span>
                        </label>
                        <div className="flex space-x-4">
                            <label className="flex items-center text-[#d1e7dd] hover:text-[#4caf50] transition-colors">
                                <input
                                    type="radio"
                                    name="healthcareQuality"
                                    value="good"
                                    checked={formData.healthcareQuality === 'good'}
                                    onChange={handleChange}
                                    className="mr-2 accent-[#4caf50] w-4 h-4"
                                />
                                Good
                            </label>
                            <label className="flex items-center text-[#d1e7dd] hover:text-[#4caf50] transition-colors">
                                <input
                                    type="radio"
                                    name="healthcareQuality"
                                    value="average"
                                    checked={formData.healthcareQuality === 'average'}
                                    onChange={handleChange}
                                    className="mr-2 accent-[#4caf50] w-4 h-4"
                                />
                                Average
                            </label>
                            <label className="flex items-center text[#d1e7dd] hover:text-[#4caf50] transition-colors">
                                <input
                                    type="radio"
                                    name="healthcareQuality"
                                    value="poor"
                                    checked={formData.healthcareQuality === 'poor'}
                                    onChange={handleChange}
                                    className="mr-2 accent-[#4caf50] w-4 h-4"
                                />
                                Poor
                            </label>
                        </div>
                    </div>

                    {/* Fertility Rate */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Fertility Rate</span>
                        </label>
                        <Slider
                            value={formData.fertilityRate}
                            onChange={handleSliderChange('fertilityRate')}
                            aria-labelledby="fertility-rate-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={10}
                            step={0.1}
                            sx={{
                                color: '#4caf50',
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#4caf50',
                                    boxShadow: '0 0 0 4px rgba(76, 175, 80, 0.2)',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#4caf50',
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#2d4a2d',
                                },
                            }}
                        />
                    </div>

                    {/* Immigration Rate */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Immigration Rate</span>
                        </label>
                        <input
                            type="number"
                            name="immigrationRate"
                            value={formData.immigrationRate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d] bg-[#1a2e1a] text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50] focus:border-[#4caf50] transition-all"
                            placeholder="Enter Immigration Rate"
                            min="-100"
                            max="100"
                        />
                    </div>

                    {/* Emigration Rate */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Emigration Rate</span>
                        </label>
                        <input
                            type="number"
                            name="emigrationRate"
                            value={formData.emigrationRate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d] bg-[#1a2e1a] text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50] focus:border-[#4caf50] transition-all"
                            placeholder="Enter Emigration Rate"
                            min="-100"
                            max="100"
                        />
                    </div>

                    {/* Birth Rate */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Birth Rate</span>
                        </label>
                        <input
                            type="number"
                            name="birthRate"
                            value={formData.birthRate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d] bg-[#1a2e1a] text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50] focus:border-[#4caf50] transition-all"
                            placeholder="Enter Birth Rate"
                            min="0"
                            max="100"
                        />
                    </div>

                    {/* Death Rate */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Death Rate</span>
                        </label>
                        <input
                            type="number"
                            name="deathRate"
                            value={formData.deathRate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d] bg-[#1a2e1a] text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50] focus:border-[#4caf50] transition-all"
                            placeholder="Enter Death Rate"
                            min="0"
                            max="100"
                        />
                    </div>
                </div>
                <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-[#4caf50] to-[#388e3c] text-white font-semibold rounded-lg hover:from-[#388e3c] hover:to-[#2e7d32] transition-all">
                    Submit Data
                </button>
            </form>
        </div>
    );
}

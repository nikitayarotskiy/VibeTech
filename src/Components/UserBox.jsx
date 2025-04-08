import React, { useState } from 'react';
import { Slider, Switch } from '@mui/material';

export default function UserBox() {
    const [formData, setFormData] = useState({
        economy: 50,
        populationChange: 'positive',
        gdpLiving: '',
        povertyRate: 0,
        healthcareQuality: 'good',
        fertilityRate: 2.1,
        migration: 0,
        mortality: 0,
        crimeRate: 0,
        cohortDynamics: 'stable',
        isDeveloped: true
    });

    const sendDataToAPI = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/lifeleap/sendData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Data successfully sent:', result);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        sendDataToAPI();
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

    const handleSwitchChange = (name) => (e) => {
        setFormData(prev => ({
            ...prev,
            [name]: e.target.checked
        }));
    };


    return (
        <div className="w-full max-w-2xl bg-gradient-to-br from-[#1a2e1a] to-[#0f1a0f] p-8 rounded-3xl shadow-2xl border border-[#2d4a2d]/50 backdrop-blur-sm font-sans">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#d1e7dd] to-[#a8d5b9] bg-clip-text text-transparent mb-8">Population Dynamics Input</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Economy Status */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Economy Strength</span>
                        </label>
                        <Slider
                            value={formData.economy}
                            onChange={handleSliderChange('economy')}
                            aria-labelledby="economy-slider"
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

                    {/* Population Change */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Population Change</span>
                        </label>
                        <div className="flex space-x-4">
                            <label className="flex items-center text-[#d1e7dd] hover:text-[#4caf50] transition-colors">
                                <input
                                    type="radio"
                                    name="populationChange"
                                    value="positive"
                                    checked={formData.populationChange === 'positive'}
                                    onChange={handleChange}
                                    className="mr-2 accent-[#4caf50] w-4 h-4"
                                />
                                Positive
                            </label>
                            <label className="flex items-center text-[#d1e7dd] hover:text-[#4caf50] transition-colors">
                                <input
                                    type="radio"
                                    name="populationChange"
                                    value="negative"
                                    checked={formData.populationChange === 'negative'}
                                    onChange={handleChange}
                                    className="mr-2 accent-[#4caf50] w-4 h-4"
                                />
                                Negative
                            </label>
                        </div>
                    </div>

                    {/* GDP per Capita */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">GDP per Capita</span>
                        </label>
                        <input
                            type="number"
                            name="gdpLiving"
                            value={formData.gdpLiving}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d]/30 bg-[#1a2e1a]/20 text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50]/50 focus:border-[#4caf50]/50 transition-all"
                            placeholder="Enter GDP"
                            min="0"
                            step="100"
                        />
                    </div>

                    {/* Poverty Rate */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Poverty Rate</span>
                        </label>
                        <Slider
                            value={formData.povertyRate}
                            onChange={handleSliderChange('povertyRate')}
                            aria-labelledby="poverty-rate-slider"
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
                            <label className="flex items-center text-[#d1e7dd] hover:text-[#4caf50] transition-colors">
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

                    {/* Migration */}
                    <div className="form-control bg-[#1a2e1a]/50 p-4 rounded-xl border border-[#2d4a2d]/30">
                        <label className="label mb-3">
                            <span className="text-[#d1e7dd] font-medium text-sm uppercase tracking-wider">Migration Rate</span>
                        </label>
                        <input
                            type="number"
                            name="migration"
                            value={formData.migration}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d]/30 bg-[#1a2e1a]/20 text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50]/50 focus:border-[#4caf50]/50 transition-all"
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d] bg-[#1a2e1a] text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50] focus:border-[#4caf50] transition-all"
                            placeholder="Enter migration rate"
                            min="-100"
                            max="100"
                        />
                    </div>

                    {/* Mortality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#d1e7dd] font-medium">Mortality Rate (per 1000 people)</span>
                        </label>
                        <input
                            type="number"
                            name="mortality"
                            value={formData.mortality}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d] bg-[#1a2e1a] text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50] focus:border-[#4caf50] transition-all"
                            placeholder="Enter mortality rate"
                            min="0"
                            max="100"
                        />
                    </div>

                    {/* Crime Rate */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#d1e7dd] font-medium">Crime Rate (per 1000 people)</span>
                        </label>
                        <Slider
                            value={formData.crimeRate}
                            onChange={handleSliderChange('crimeRate')}
                            aria-labelledby="crime-rate-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={100}
                            sx={{
                                color: '#4caf50',
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#4caf50',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#4caf50',
                                },
                            }}
                        />
                    </div>

                    {/* Cohort Dynamics */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#d1e7dd] font-medium">Cohort Dynamics</span>
                        </label>
                        <select 
                            name="cohortDynamics"
                            value={formData.cohortDynamics}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-[#2d4a2d] bg-[#1a2e1a] text-[#d1e7dd] focus:ring-2 focus:ring-[#4caf50] focus:border-[#4caf50] transition-all"
                        >
                            <option value="stable">Stable</option>
                            <option value="changing">Changing</option>
                            <option value="volatile">Volatile</option>
                        </select>
                    </div>

                    {/* Developed Country */}
                    <div className="form-control flex items-center">
                        <label className="label">
                            <span className="text-[#d1e7dd] font-medium mr-4">Developed Country</span>
                        </label>
                        <Switch
                            checked={formData.isDeveloped}
                            onChange={handleSwitchChange('isDeveloped')}
                            color="primary"
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#4caf50',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#4caf50',
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#4caf50] text-[#d1e7dd] font-semibold rounded-lg hover:bg-[#3d8b40] transition-all transform hover:scale-[1.02] active:scale-95"
                        onClick={() => {
                            console.log('Submit button clicked');
                            handleSubmit();
                        }}
                    >
                        Submit Data
                    </button>
                </div>
            </form>
        </div>
    );
}

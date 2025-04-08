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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Population Dynamics Input</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                    {/* Economy Status */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Economy Strength (0-100)</span>
                        </label>
                        <Slider
                            value={formData.economy}
                            onChange={handleSliderChange('economy')}
                            aria-labelledby="economy-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={100}
                        />
                    </div>

                    {/* Population Change */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Population Change</span>
                        </label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="populationChange"
                                    value="positive"
                                    checked={formData.populationChange === 'positive'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Positive
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="populationChange"
                                    value="negative"
                                    checked={formData.populationChange === 'negative'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Negative
                            </label>
                        </div>
                    </div>

                    {/* GDP per Capita */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">GDP per Capita (USD)</span>
                        </label>
                        <input
                            type="number"
                            name="gdpLiving"
                            value={formData.gdpLiving}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                            placeholder="Enter GDP"
                            min="0"
                            step="100"
                        />
                    </div>

                    {/* Poverty Rate */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Poverty Rate (%)</span>
                        </label>
                        <Slider
                            value={formData.povertyRate}
                            onChange={handleSliderChange('povertyRate')}
                            aria-labelledby="poverty-rate-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={100}
                        />
                    </div>

                    {/* Healthcare Quality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Healthcare Quality</span>
                        </label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="healthcareQuality"
                                    value="good"
                                    checked={formData.healthcareQuality === 'good'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Good
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="healthcareQuality"
                                    value="average"
                                    checked={formData.healthcareQuality === 'average'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Average
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="healthcareQuality"
                                    value="poor"
                                    checked={formData.healthcareQuality === 'poor'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Poor
                            </label>
                        </div>
                    </div>

                    {/* Fertility Rate */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Fertility Rate (children per woman)</span>
                        </label>
                        <Slider
                            value={formData.fertilityRate}
                            onChange={handleSliderChange('fertilityRate')}
                            aria-labelledby="fertility-rate-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={10}
                            step={0.1}
                        />
                    </div>

                    {/* Migration */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Net Migration Rate (per 1000 people)</span>
                        </label>
                        <input
                            type="number"
                            name="migration"
                            value={formData.migration}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                            placeholder="Enter migration rate"
                            min="-100"
                            max="100"
                        />
                    </div>

                    {/* Mortality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Mortality Rate (per 1000 people)</span>
                        </label>
                        <input
                            type="number"
                            name="mortality"
                            value={formData.mortality}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                            placeholder="Enter mortality rate"
                            min="0"
                            max="100"
                        />
                    </div>

                    {/* Crime Rate */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Crime Rate (per 1000 people)</span>
                        </label>
                        <Slider
                            value={formData.crimeRate}
                            onChange={handleSliderChange('crimeRate')}
                            aria-labelledby="crime-rate-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={100}
                        />
                    </div>

                    {/* Cohort Dynamics */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700 font-medium">Cohort Dynamics</span>
                        </label>
                        <select 
                            name="cohortDynamics"
                            value={formData.cohortDynamics}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                        >
                            <option value="stable">Stable</option>
                            <option value="changing">Changing</option>
                            <option value="volatile">Volatile</option>
                        </select>
                    </div>

                    {/* Developed Country */}
                    <div className="form-control flex items-center">
                        <label className="label">
                            <span className="text-gray-700 font-medium mr-4">Developed Country</span>
                        </label>
                        <Switch
                            checked={formData.isDeveloped}
                            onChange={handleSwitchChange('isDeveloped')}
                            color="primary"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-95"
                    >
                        Submit Data
                    </button>
                </div>
            </form>
        </div>
    );
}


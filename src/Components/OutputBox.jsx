import React from 'react';
import { LineChart, BarChart, PieChart } from '@mui/x-charts';

export default function OutputBox() {
    return (
        <div className="w-full max-w-4xl bg-[#1a2e1a] p-8 rounded-2xl shadow-2xl border border-[#2d4a2d] font-sans ml-2 mr-2">
            <h2 className="text-3xl font-bold text-[#d1e7dd] mb-6">Population Dynamics Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Economic Indicators */}
                <div className="bg-[#2d4a2d] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">Economic Projections</h3>
                    <div className="h-48">
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 4, 5] }]}
                            series={[
                                {
                                    data: [2, 3, 5, 7, 11],
                                    color: '#4caf50'
                                },
                            ]}
                        />
                    </div>
                </div>

                {/* Demographic Trends */}
                <div className="bg-[#2d4a2d] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">Demographic Shifts</h3>
                    <div className="h-48">
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['2020', '2030', '2040'] }]}
                            series={[{ data: [4, 3, 5], color: '#4caf50' }]}
                        />
                    </div>
                </div>

                {/* Social Indicators */}
                <div className="bg-[#2d4a2d] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">Social Metrics</h3>
                    <div className="h-48">
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Education', color: '#4caf50' },
                                        { id: 1, value: 15, label: 'Healthcare', color: '#3d8b40' },
                                        { id: 2, value: 20, label: 'Security', color: '#2d6a2d' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </div>
                </div>

                {/* Environmental Factors */}
                <div className="bg-[#2d4a2d] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">Environmental Impact</h3>
                    <div className="h-48">
                        <LineChart
                            xAxis={[{ data: [2020, 2025, 2030, 2035, 2040] }]}
                            series={[
                                {
                                    data: [5, 4.5, 4, 3.5, 3],
                                    label: 'Carbon Footprint',
                                    color: '#4caf50'
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#d1e7dd] mb-4">Key Insights</h3>
                <div className="space-y-4">
                    <div className="bg-[#2d4a2d] p-4 rounded-lg">
                        <p className="text-[#d1e7dd]">Population growth is expected to stabilize by 2040, with a projected growth rate of 0.8%.</p>
                    </div>
                    <div className="bg-[#2d4a2d] p-4 rounded-lg">
                        <p className="text-[#d1e7dd]">Healthcare improvements could increase life expectancy by 3.2 years by 2050.</p>
                    </div>
                    <div className="bg-[#2d4a2d] p-4 rounded-lg">
                        <p className="text-[#d1e7dd]">Economic growth may slow due to aging population, requiring policy interventions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function StatisticsDisplay({ statistics }) {
  return (
    <div className="w-full flex flex-col bg-white rounded rounded-t-2xl shadow-xl">

      <div className="tooltip absolute top-0 right-2 m-4 tooltip-left " data-tip="Statistics may be inaccurate ">
        <h2 className="material-symbols-outlined">
          info
        </h2>
      </div>

      <div className="w-full p-6 rounded-t bg-black text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold">LifeLeap</h1>
        <h2 className="text-xl mt-2">YEAR: {statistics.year}</h2>
      </div>

      <div className="w-full p-6 bg-white rounded-b-lg text-green-900 flex flex-col items-center">
        <ul className='w-full text-black space-y-2'>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Total Population:</span><span>{statistics.totalPopulation ?? 'N/A'}</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Birth Rate:</span><span>{statistics.birthRate !== undefined ? statistics.birthRate.toFixed(2) : 'N/A'}% per year</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Death Rate:</span><span>{statistics.deathRate !== undefined ? statistics.deathRate.toFixed(2) : 'N/A'}% per year</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Median Age:</span><span>{statistics.medianAge !== undefined ? statistics.medianAge.toFixed(2) : 'N/A'} years</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Life Expectancy:</span><span>{statistics.lifeExpectancy !== undefined ? statistics.lifeExpectancy.toFixed(2) : 'N/A'} years</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Youth Dependency Ratio:</span><span>{statistics.youthDependencyRatio !== undefined ? statistics.youthDependencyRatio.toFixed(2) : 'N/A'}%</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Old Age Dependency Ratio:</span><span>{statistics.oldAgeDependencyRatio !== undefined ? statistics.oldAgeDependencyRatio.toFixed(2) : 'N/A'}%</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Population Growth Rate:</span><span>{statistics.populationGrowthRate !== undefined ? statistics.populationGrowthRate.toFixed(2) : 'N/A'}% per year</span></li>
          <li className="flex justify-between p-2 border-b border-gray-300"><span>Net Migration Rate:</span><span>{statistics.netMigrationRate !== undefined ? statistics.netMigrationRate.toFixed(2) : 'N/A'}% per year</span></li>
          <li className="flex justify-between p-2"><span>Sex Ratio:</span><span>{statistics.sexRatio !== undefined ? statistics.sexRatio.toFixed(2) : 'N/A'} males per 100 females</span></li>
        </ul>
      </div>
    </div>
  );
}

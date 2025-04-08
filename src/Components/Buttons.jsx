import React from 'react';
import { addYears, adjustList } from '../logic';

export default function Buttons({ statistics, setStatistics, populationList, setPopulationList }) {
    const handleButtonClick = (years) => {        
        setStatistics(addYears(statistics, years));
        setPopulationList(adjustList(populationList, years))
    };

    return (


        <div className="w-fullflex flex-col bg-white rounded rounded-t-2xl shadow-xl mt-2">
            <div className="w-full p-6 rounded-t bg-black text-white flex flex-col items-center">
                <h2 className="text-xl mt-2">Add Years</h2>
            </div>

            <div className="flex flex-wrap justify-center p-2">
                {[1, 2, 3, 4, 5, 10, 50, 100].map(years => (
                    <button
                        key={years}
                        className="btn m-1 rounded-xl w-1/5"
                        onClick={() => handleButtonClick(years)}
                    >
                        {years}
                    </button>
                ))}
            </div>
        </div>


    );
}

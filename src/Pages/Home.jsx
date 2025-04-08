import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatisticsDisplay from '../Components/StatisticsDisplay';
import PopulationGrid from '../Components/PopulationGrid';
import { generateData, generateList } from '../logic';
import Buttons from '../Components/Buttons';
import UserBox from '../Components/UserBox';
import OutputBox from '../Components/OutputBox';
import VissualBox from '../Components/VissualBox';


export default function Home() {
    const navigate = useNavigate();
    const [populationList, setPopulationList] = useState([]);
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setPopulationList(generateList(100));

            const population = localStorage.getItem('population');

            if (!population) navigate("/start");

            const generatedStats = generateData(Number(population));
            setStatistics(generatedStats);
        };

        fetchData();
    }, []);

    return (
        <div className="flex w-full min-h-screen bg-neutral p-4">
            {/* <div className="w-2/3 bg-white p-6 rounded shadow-md">
                <div className="flex justify-between">
                    <h2 className="text-black text-5xl ml-2">POPULATION</h2>
                    <div className="tooltip top-0 right-2 mt-4 tooltip-left text-black " data-tip="Visual representation">
                        <h2 className="material-symbols-outlined mt-3 ">info</h2>
                    </div>
                </div>

                <div className="w-full bg-black h-[5px] rounded mb-4"></div>
                <PopulationGrid populationList={populationList} />
            </div>

            <div className='w-1/3 h-full fixed top-4 right-0'>
                <div className="pl-2 pr-2">
                    <StatisticsDisplay statistics={statistics} />
                    <Buttons statistics={statistics} setStatistics={setStatistics} populationList={populationList} setPopulationList={setPopulationList} />
                </div>
            </div> */}

            <UserBox />
            <OutputBox />
            <VissualBox />

        </div>
    );
}

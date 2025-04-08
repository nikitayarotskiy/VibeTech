import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateData, generateList } from '../logic';
import UserBox from '../Components/UserBox';
import OutputBox from '../Components/OutputBox';
import VissualBox from '../Components/VissualBox';
import Collapse from '../Components/Collapse';
import Tittle from '../Components/Tittle';


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
        <div className="flex w-full min-h-screen bg-neutral">
            {/* Left side - scrollable column */}
            <div className="w-1/2 h-screen overflow-y-auto">
                <div className="p-2">
                    <Tittle />
                    <UserBox />
                </div>
            </div>
            
            {/* Right side - scrollable column */}
            <div className="w-1/2 h-screen overflow-y-auto">
                <div className="space-y-2 p-2">
                    <Collapse title="Visualizations">
                        <VissualBox />
                    </Collapse>
                    <Collapse title="Analysis Output">
                        <OutputBox />
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

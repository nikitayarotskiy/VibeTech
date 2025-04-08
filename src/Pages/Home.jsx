import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateData, generateList } from '../logic';
import UserBox from '../Components/UserBox';
import OutputBox from '../Components/OutputBox';
import VissualBox from '../Components/VissualBox';
import Collapse from '../Components/Collapse';
import Tittle from '../Components/Tittle';
import BackToStart from '../Components/BackToStart';


export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const countryId = localStorage.getItem('countryId');
            
            if (!countryId) {
                navigate("/start");
                return;
            }

          
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-neutral">
            {/* Left side - scrollable column */}
            <div className="w-full md:w-1/2 h-auto md:h-screen overflow-y-auto">
                <div className="p-2">
                    <Tittle />
                    <UserBox />
                    <BackToStart />
                </div>
            </div>
            
            {/* Right side - scrollable column */}
            <div className="w-full md:w-1/2 h-auto md:h-screen overflow-y-auto">
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

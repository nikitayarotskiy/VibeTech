import React from 'react';
import DataSelection from '../Components/DataSelection';

export default function StartPage() {
  return (
    <div className="w-full min-h-screen bg-[#1a2e1a] flex">
      <div className="w-1/2 flex items-center pl-16">
        <h1 className="text-[#d1e7dd] text-8xl">LifeLeap 2</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-[900px] h-[90%] rounded-xl flex flex-col items-center justify-center border border-[#1a2e1a]">
          <DataSelection />
        </div>
      </div>
    </div>
  );
}

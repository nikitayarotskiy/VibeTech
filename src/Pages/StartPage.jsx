import React from 'react';
import DataSelection from '../Components/DataSelection';

export default function StartPage() {
  return (
    <div className="w-full min-h-screen bg-[#1a2e1a]">
      <h1 className="fixed text-[#d1e7dd] text-8xl mt-8 ml-8">LifeLeap 2</h1>

      <div className="fixed top-0 h-full right-24 rounded-xl w-[900px] flex flex-col items-center justify-center border border-[#1a2e1a]">
        <DataSelection />
      </div>
    </div>
  );
}

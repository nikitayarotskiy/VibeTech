import React from 'react';
import DataSelection from '../Components/DataSelection';

export default function StartPage() {
  return (
    <div className="w-full min-h-screen bg-neutral">
      <h1 className="fixed text-white text-8xl mt-8 ml-8">LifeLeap 2</h1>

      <div className="fixed top-0 h-full right-24 rounded-xl w-[900px] flex flex-col items-center justify-center">
        <DataSelection />
      </div>
    </div>
  );
}

import React from 'react';

export default function Card({ imgSrc, name, gender, age }) {
  return (
    <div className="card bg-s shadow-xl rounded-lg overflow-hidden text-center text-black h-ful">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div className="p-1">
        <h2 className="text-md font-bold mt-2">{name}</h2>
        <p className="text-sm mb-1">{gender} | {age}</p>
      </div>
    </div>
  );
}

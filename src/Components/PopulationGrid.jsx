import React from 'react';
import Card from './Card';

export default function PopulationGrid({ populationList }) {
    return (
        <div className="grid grid-cols-5 gap-4 mt-4">
            {populationList.map((person, index) => (
                <Card
                    key={index}
                    imgSrc={person.imgSrc}
                    name={person.name}
                    gender={person.gender}
                    age={person.age}
                />
            ))}
        </div>
    );
}

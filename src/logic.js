export function generateData(population) {
    const totalPopulation = Math.max(population, 0);
    
    const baseBirthRate = Math.random() * (0.045 - 0.010) + 0.010; 
    const baseDeathRate = Math.random() * (0.025 - 0.005) + 0.005; 
    
    const birthRate = baseBirthRate;
    const deathRate = baseDeathRate;

    const medianAge = Math.min(Math.floor(20 + (totalPopulation / 500000) * 10 + Math.random() * 5), 100);
    const lifeExpectancy = Math.min(Math.floor(70 + (totalPopulation / 100000) * 5 + Math.random() * 5), 120); 

    // Initialize ratios with more reasonable minimum values
    const youthDependencyRatio = Math.max(10, Math.min(100, Math.floor(30 - (totalPopulation / 10000000) * 20 + Math.random() * 10)));
    const oldAgeDependencyRatio = Math.max(0, Math.min(100, Math.floor(20 + (totalPopulation / 10000000) * 20 + Math.random() * 10)));

    const populationGrowthRate = ((birthRate - deathRate) * 100) || 0; 
    const netMigrationRate = Math.random() * (0.02 - 0.01) + 0.01; 
    
    const sexRatio = Math.floor(95 + Math.random() * 11); 

    const year = 1;

    return {
        year,
        totalPopulation,
        birthRate,
        deathRate,
        medianAge,
        lifeExpectancy,
        youthDependencyRatio,
        oldAgeDependencyRatio,
        populationGrowthRate,
        netMigrationRate,
        sexRatio
    };
}

export function addYears(oldData, numberOfYearsAdded) {
    const newData = { ...oldData };

    for (let time = 0; time < numberOfYearsAdded; time++) {
        newData.year++;

        const growthRate = (Math.random() * 0.02 - 0.01) / 100; // Adjust growth rate to a smaller range
        const births = newData.birthRate * newData.totalPopulation * growthRate;
        const deaths = newData.deathRate * newData.totalPopulation * growthRate;
        const netMigration = newData.netMigrationRate * newData.totalPopulation * growthRate;
        
        newData.totalPopulation += births - deaths + netMigration;
        newData.totalPopulation = Math.max(newData.totalPopulation, 0);
        
        newData.medianAge = Math.min(newData.medianAge + Math.random() * 0.2, 120);
        if (newData.lifeExpectancy > newData.medianAge) {
            newData.lifeExpectancy = Math.min(newData.lifeExpectancy + Math.random() * 0.2, 120);
        }

        newData.youthDependencyRatio = Math.max(0, Math.min(100, newData.youthDependencyRatio + (Math.random() * 0.5 - 0.25))); 
        newData.oldAgeDependencyRatio = Math.max(0, Math.min(100, newData.oldAgeDependencyRatio + (Math.random() * 0.5 - 0.25))); 

        if (newData.totalPopulation < 100000) {
            newData.youthDependencyRatio = Math.min(100, newData.youthDependencyRatio + 2); 
            newData.oldAgeDependencyRatio = Math.max(0, newData.oldAgeDependencyRatio - 2); 
        } else if (newData.totalPopulation > 1000000) {
            newData.youthDependencyRatio = Math.max(10, newData.youthDependencyRatio - 2); 
            newData.oldAgeDependencyRatio = Math.min(100, newData.oldAgeDependencyRatio + 2); 
        }

        newData.sexRatio = Math.max(0, Math.floor(newData.sexRatio + (Math.random() > 0.5 ? 0.05 : -0.05)));

        newData.populationGrowthRate = ((births - deaths + netMigration) / newData.totalPopulation) * 100 || 0; 
    }

    return newData;
}





const boyNames = [
    "Liam",
    "Noah",
    "Oliver",
    "Elijah",
    "James",
    "William",
    "Benjamin",
    "Lucas",
    "Henry",
    "Alexander",
    "Jackson",
    "Sebastian",
    "Mateo",
    "David",
    "Joseph",
    "Carter",
    "Owen",
    "Wyatt",
    "John",
    "Jack",
    "Luke",
    "Gabriel",
    "Isaac",
    "Jayden",
    "Anthony",
    "Dylan",
    "Leo",
    "Lincoln",
    "Asher",
    "Christopher",
    "Maverick"
];

const girlNames = [
    "Olivia",
    "Emma",
    "Ava",
    "Sophia",
    "Isabella",
    "Mia",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Ella",
    "Scarlett",
    "Grace",
    "Chloe",
    "Aria",
    "Sofia",
    "Madison",
    "Layla",
    "Lily",
    "Nora",
    "Riley",
    "Zoey",
    "Mila",
    "Hannah",
    "Addison",
    "Avery",
    "Ellie",
    "Stella",
    "Natalie",
    "Lucy",
    "Paisley"
];


export function generateList(numberOfPeople) {
    let generatedList = []

    for (let i = 0; i < numberOfPeople; i++) {
        generatedList.push(addHuman())
    }

    return generatedList
}

function addHuman() {
    let gender = Math.round(Math.random());
    let imgIndex = Math.floor(Math.random() * 5) + 1;
    let age = Math.floor(Math.random() * 80) + 2

    const currentImg = Math.min(
        age <= 4 ? 1 :
            age <= 16 ? 2 :
                age <= 30 ? 3 :
                    age <= 65 ? 4 : 5
    );


    if (gender == 1) {
        return {
            imgIndex: imgIndex,
            imgSrc: "./people/male" + imgIndex + "/" + currentImg + ".jpg",
            name: boyNames[Math.floor(Math.random() * boyNames.length)],
            gender: "Male",
            age: age,
        }
    } else {
        return {
            imgIndex: imgIndex,
            imgSrc: "./people/female" + imgIndex + "/" + currentImg + ".jpg",
            name: girlNames[Math.floor(Math.random() * girlNames.length)],
            gender: "Female",
            age: Math.floor(Math.random() * 80) + 2,
        }
    }
}

export function adjustList(list, years) {
    console.log(list[0])

    for (let i = 0; i < list.length; i++) {
        list[i].age += years
        if (list[i].age >= 90) list[i] = addHuman()

        let currentImg = Math.min(
            list[i].age <= 4 ? 1 :
                list[i].age <= 16 ? 2 :
                    list[i].age <= 30 ? 3 :
                        list[i].age <= 65 ? 4 : 5
        );

        if (list[i].gender == "Male") {
            list[i].imgSrc = "./people/male" + list[i].imgIndex + "/" + currentImg + ".jpg"
        } else {
            list[i].imgSrc = "./people/female" + list[i].imgIndex + "/" + currentImg + ".jpg"
        }
    }

    console.log(list[0])

    return list

}
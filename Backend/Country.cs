using System.Text.Json;

namespace Backend
{
    public class Country
    {
      //note: we are dealing with big numbers, we are using 64 bit data types

	//simulation variabes

	//internal variables that are global
	long population;

	//internal variables for economy
	long gdp;//dollar value
	double lgc;//newGDP / population / livingCost, try to keep it around 1.2, dictates if the people are able to pay expenses
	double oldlgc;//store old values to allow calculation of perception of state of the economy
	double oldoldlgc;
	double livingCost;//cost of living, dollar value
	double inflation;//increase in cost of living, something like 1.02

	//internal variabes for healthcare
	double deltaHealth;//from 0-1
	double healthcareEfficacy;//from 0-1 how many diseases result in death
	double diseaseSeverity;//affects health care efficacy
	double diseaseAmount;

	//internal variables for immigration/migration
	long immigrationRate;//amount of people immigrating and emmigrating summed
	long baseImmigrationRate;//base immigration and migration rates, try to return to these

	//internal variables for fertility
	long baseFertility;//births per woman
	long baseMortality;//deaths of the population as scalar
	long fertility;//births per woman
	long mortality;//deaths of the population as a scalar


	//disaster types

	//set default values for variables
	population = 40000000;

	gdp = 2100000000000;//dollar value
	livingCost = 48000;//cost of living, dollar value
	inflation = 1.02;//increase in cost of living, something like 1.02
	lgc = (double)gdp / (double)population / (double)livingCost;//newGDP / population / livingCost, try to keep it around 1.2, dictates if the people are able to pay expenses
	oldlgc = lgc;//store old values to allow calculation of perception of state of the economy
	oldoldlgc = lgc;

	deltaHealth = 1.0;//from 0-1
	healthcareEfficacy = 0.95;//from 0-1 how many diseases result in death
	diseaseSeverity = 0.2;//affects health care efficacy
	diseaseAmount = 0.05;

	immigrationRate = 39166;//amount of people immigrating and emmigrating summed
	baseImmigrationRate = 37500;

	baseFertility = 1.33;
	baseMortality = 0.08;
	fertility = 1.33;
	mortality = 0.08;

	//logic
	int simMonths = 12;
	for (int i = 0; i < simMonths; i++)
	{
	double baselgc = 1.2;
	int economicState = 0;
	inflation = 1.02;//determine inflation
	if (lgc < baselgc) inflation = 1.03;//cost of living up, inflation up
	if (lgc > baselgc) inflation = 1.01;//cost of living down, inflation down
	//determine living cost
	livingCost *= inflation;
	//determine lgc
	oldoldlgc = old;
	oldlgc = lgc;
	lgc = (double)gdp / (double)population / (double)livingCost / 1.2;
	//determine the economic state
	deltaLGC = lgc - oldlgc;
	oldDeltaLGC = oldlgc - oldoldlgc;
	if (deltaLGC * oldDeltaLGC < 0.0 && abs(deltaLGC + oldDeltaLGC) < 0.4)//if economy is stable
	{
		economicState = 3;//stable economy
	}
	else if (deltaLGC > 0.0)//increasing economy
	{
		if ()//increasing stable
		{
			economicState = 4;
		}
		else if ()//increasing increasing
		{
			economicState = 5;
		}
	}
	else if (deltaLGC < 0.0)//decreasing economy
	{
		if ()//decreasing stable
		{
			economicState = 2;
		}
		else if ()//decreasing decreasing
		{
			economicState = 1;
		}
	}
	//determine new gdp
        
        //posible disasters: rapid inflation(economic crash), mass disease, mass immigration/migration, cost of living increase, political disaster, etc

        //main variables that we will expose to the user to edit
        //population
        //economy goodness(affects all economic variables?)
        //country health(affectsfertility/birth rate and healthcare and disease and etc)

        
        public void Init()
        {
            fertilityRate = 10;
        }

        public void LoadFromJson(string json)
        {
            //all the same format
            
        }

        public string LoadToJson()
        {
            JsonSerializerOptions options = new JsonSerializerOptions()
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                ReadCommentHandling = JsonCommentHandling.Skip,
                AllowTrailingCommas = true,
            };

            string json = JsonSerializer.Serialize(this, options);
            return json;
        }

        public void Update(float dt)
        {
            population += fertilityRate * dt;
            
            //temporarily set the data to an amount to allow the frontend to test if it displays properly
            //this is not necesarily indicitave of what the data values should be, just test values
            /*livingCost = 10.0f;
            
            //population related
            fertilityRate = 10.0f;
            healthCareStrength = 10.0f;
            immigrationRate = 10.0f;
            migrationRate = 10.0f;
            mortalityRate = 10.0f;
            
            //statistic related
            povertyRate = 10.0f;
            crimeRate = 10.0f;
            
            //internal simulation variables
            population = 10.0f;
            gdp = 10.0f;
            livingCostPerGdpPerCapita = 10.0f;*/
        }
        
    }
}
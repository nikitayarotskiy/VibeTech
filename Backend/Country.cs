using System.Text.Json;

namespace Backend
{

	public class CEV
	{
		public long population {get; set;}
		public long gdp { get; set; }//dollar value
		public double livingCost {get; set;}//cost of living, dollar value
		public double healthcareEfficacy {get; set;}//from 0-1 how many diseases result in death
		public double diseaseSeverity {get; set;}//affects health care efficacy
		public double diseaseAmount {get; set;}
		public double immigrationCoefficient {get; set;}
		public double baseFertility {get; set;}//births per woman
		public double baseMortality {get; set;}//deaths of the population as scalar

		public double deltaHealth { get; set; }//from 0-1, resiliance
	}
	
    public class Country
    {
	    
	    public CEV cev { get; set; }
	    
		public double lgc {get; set;}//newGDP / population / livingCost, try to keep it around 1.2, dictates if the people are able to pay expenses
		public double oldlgc {get; set;}//store old values to allow calculation of perception of state of the economy
		public double oldoldlgc { get; set; }
		public double inflation {get; set;}//increase in cost of living, something like 1.02

		//internal variabes for healthcare
		public double deltaHealth {get; set;}//from 0-1

		//internal variables for immigration/migration
		public long immigrationRate {get; set;}//amount of people immigrating and emmigrating summed
		
		public double fertility {get; set;}//births per woman
		public double mortality {get; set;}//deaths of the population as a scalar
		public long oldPopulation { get; set; }
		public long baseImmigrationRate { get; set; }//base immigration and migration rates, try to return to these

		public float storedTime { get; set; }//for timestep


		public Country()
		{
			cev = new CEV();
		}
		
		
	//disaster types
	
	//determine new gdp

        
        public void Init()
        {
	        //disaster types

	        //set default values for variables
	        cev.population = 40000000;
	        oldPopulation = 40000000;

	        cev.gdp = 2100000000000;//dollar value
	        cev.livingCost = 48000;//cost of living, dollar value
	        inflation = 1.02;//increase in cost of living, something like 1.02
	        lgc = (double)cev.gdp / (double)cev.population / (double)cev.livingCost;//newGDP / population / livingCost, try to keep it around 1.2, dictates if the people are able to pay expenses
	        oldlgc = lgc;//store old values to allow calculation of perception of state of the economy
	        oldoldlgc = lgc;

	        deltaHealth = 1.1;//from 0-1, resiliance
	        cev.healthcareEfficacy = 0.95;//from 0-1 how many diseases result in death
	        cev.diseaseSeverity = 0.2;//affects health care efficacy
	        cev.diseaseAmount = 0.05;

	        immigrationRate = 39166;//amount of people immigrating and emmigrating summed
	        baseImmigrationRate = 37500;
	        cev.immigrationCoefficient = (double)cev.population / (double)baseImmigrationRate;

	        cev.baseFertility = 1.33;
	        cev.baseMortality = 0.08;
	        fertility = 1.33;
	        mortality = 0.08;

	        storedTime = 0.0f;
        }

        public double clamp(double x, double low, double high)
        {
	        if (x > high)
	        {
		        return high;
	        }
	        else if (x < low)
	        {
		        return low;
	        }

	        return x;
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

            string json = JsonSerializer.Serialize(this.cev, options);
            return json;
        }

        public void Update(float dt)
        {
	        storedTime += dt;
	        if (storedTime > 2.0f)
	        {
		        storedTime = 0.0f;
		        oldPopulation = cev.population;
		        double baselgc = 1.2;
		        int economicState = 0;
		        inflation = 1.02; //determine inflation
		        if (lgc < baselgc) inflation = 1.03; //cost of living up, inflation up
		        if (lgc > baselgc) inflation = 1.01; //cost of living down, inflation down
		        //determine living cost
		        cev.livingCost *= inflation;
		        //determine lgc
		        oldoldlgc = oldlgc;
		        oldlgc = lgc;
		        lgc = (double)cev.gdp / (double)cev.population / (double)cev.livingCost / 1.2;
		        //determine the economic state
		        double deltaLGC = lgc - oldlgc;
		        double oldDeltaLGC = oldlgc - oldoldlgc;
		        if (deltaLGC * oldDeltaLGC <= 0.0 && Math.Abs(deltaLGC + oldDeltaLGC) < 0.01) //if economy is stable
		        {
			        economicState = 3; //stable economy
		        }
		        else if (deltaLGC > 0.0) //increasing economy
		        {
			        if (deltaLGC - oldDeltaLGC > 0.0) //increasing stable
			        {
				        economicState = 4;
			        }
			        else if (deltaLGC - oldDeltaLGC <= 0.0) //increasing increasing
			        {
				        economicState = 5;
			        }
		        }
		        else if (deltaLGC < 0.0) //decreasing economy
		        {
			        if (deltaLGC - oldDeltaLGC > 0.0) //decreasing stable
			        {
				        economicState = 2;
			        }
			        else if (deltaLGC - oldDeltaLGC <= 0) //decreasing decreasing
			        {
				        economicState = 1;
			        }
		        }

		        //determine new gdp
		        double econOutlookEffect = ((3.0 - economicState) / 32.0) + 1.0;
		        double gdpIncreasePopulation = ((double)cev.population / (double)oldPopulation);
		        cev.gdp = (long)((double)cev.gdp * (inflation) * (gdpIncreasePopulation) * (econOutlookEffect));

		        //healthcare
		        double immigrantEffect = 1.0f;
		        if (immigrationRate > (long)(cev.immigrationCoefficient * (double)cev.population))
		        {
			        //we only accept 0.012 of the population of immigrant
			        immigrantEffect = 1.0 / (immigrationRate / (long)(cev.immigrationCoefficient * (double)cev.population));
		        }

		        cev.healthcareEfficacy = clamp(cev.healthcareEfficacy * immigrationRate * cev.deltaHealth * (((econOutlookEffect - 1.0) * 2.0) + 1.0),
				        0.1, 0.95);
		        cev.diseaseSeverity *= 1.0 - (0.1 * cev.healthcareEfficacy);
		        cev.diseaseAmount *= 1.0 - (0.1 * cev.healthcareEfficacy);
		        mortality = 0.08 + (cev.diseaseAmount * cev.diseaseSeverity * cev.healthcareEfficacy);


		        baseImmigrationRate = (long)(cev.immigrationCoefficient * (double)cev.population);
		        immigrationRate = (long)((double)baseImmigrationRate * (((econOutlookEffect - 1.0) * 2.0) + 1.0));

		        cev.baseFertility = 1.33;
		        double lifeExpectancy = clamp(85 * cev.healthcareEfficacy, 40, 85); //life expectancy based on health care
		        fertility = cev.baseFertility / (lifeExpectancy * 12.0); //set fertility to 
		        cev.population = cev.population + (long)((immigrationRate) + (cev.population * mortality) + (cev.population * fertility));
	        }
	        
        }
        
    }
}
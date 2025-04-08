using System.Text.Json;

namespace Backend
{

	public struct CEV
	{
		public long population {get; set;}
		public long gdp { get; set; }//dollar value
		public double livingCost {get; set;}//cost of living, dollar value
		public double healthcareEfficacy {get; set;}//from 0-1 how many diseases result in death
		public double diseaseSeverity {get; set;}//affects health care efficacy
		public double diseaseAmount {get; set;}
		public long baseImmigrationRate {get; set;}//base immigration and migration rates, try to return to these
		public long baseFertility {get; set;}//births per woman
		public long baseMortality {get; set;}//deaths of the population as scalar
	}
	
    public class Country
    {
	    
      //note: we are dealing with big numbers, we are using 64 bit data types

	//simulation variabes

	//internal variables that are global
	public long population {get; set;}

	//internal variables for economy
	public long gdp { get; set; }//dollar value
	public double lgc {get; set;}//newGDP / population / livingCost, try to keep it around 1.2, dictates if the people are able to pay expenses
	public double oldlgc {get; set;}//store old values to allow calculation of perception of state of the economy
	public double oldoldlgc {get; set;}
	public double livingCost {get; set;}//cost of living, dollar value
	public double inflation {get; set;}//increase in cost of living, something like 1.02

	//internal variabes for healthcare
	public double deltaHealth {get; set;}//from 0-1
	public double healthcareEfficacy {get; set;}//from 0-1 how many diseases result in death
	public double diseaseSeverity {get; set;}//affects health care efficacy
	public double diseaseAmount {get; set;}

	//internal variables for immigration/migration
	public long immigrationRate {get; set;}//amount of people immigrating and emmigrating summed
	public long baseImmigrationRate {get; set;}//base immigration and migration rates, try to return to these

	//internal variables for fertility
	public long baseFertility {get; set;}//births per woman
	public long baseMortality {get; set;}//deaths of the population as scalar
	public long fertility {get; set;}//births per woman
	public long mortality {get; set;}//deaths of the population as a scalar


	//disaster types
	
	//determine new gdp

        
        public void Init()
        {
            
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
	        //posible disasters: rapid inflation(economic crash), mass disease, mass immigration/migration, cost of living increase, political disaster, etc

	        //main variables that we will expose to the user to edit
	        //population
	        //economy goodness(affects all economic variables?)
	        //country health(affectsfertility/birth rate and healthcare and disease and etc)
	        
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

	        /*baseFertility = 1.33;
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
            */
        }
        
    }
}
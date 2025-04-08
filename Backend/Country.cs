namespace Backend
{
    public class Country
    {
        //economy related
        public double livingCost { get; set; }//cost of living, dollar value
        
        //population related
        public double fertilityRate { get; set; }//how many citizens are born per month, one int is one citizen
        public double healthCareStrength { get; set; }//scale of zero to one, zero means that every disease is uncurable, one means that every disease is cured
        public double diseaseRate { get; set; }//scale of zero to one, zero means that nobody gets diseases, one means that every citizen gets a disease every month
        public double diseaseStrength { get; set; }//strength of disease from zero to one, zero means that no death chance from disease, one means that every disease causes death
        public double immigrationRate { get; set; }//how many citizens are moving in per month, one int is once citizen
        public double migrationRate { get; set; }//how many citizens are moving out per month, one int is once citizen
        public double mortalityRate { get; set; }//how many citizens are dying per month, one int is once citizen
        
        //statistic related
        public double povertyRate { get; set; }//scale of zero to one, where zero is no poverty and one is every citizen is in poverty, if under livingCostPerGdpPerCapita for lots of time then the citizen is added to this number
        public double crimeRate { get; set; }//scale of zero to one, zero meaning no crime and one meaning each citizen commits a crime every month
        
        //internal simulation variables
        public double population { get; set; }//population of the country, no limit
        public double gdp { get; set; }//gdp of the country, dollar value, no limit on number
        public double inflation { get; set; }//inflation as a scalar 1.0f gives no inflation, 1.02f gives 2 percent, etc
        public double livingCostPerGdpPerCapita { get; set; }//gives a ratio of individual living cost and ratio per household, if it is 1 then you have an equal amount of income and expenses, over 1 and you have a ratio under one you are going in debt, more expenses and less income, if you have over 1 you have more income than expenses
        public double disasterChance { get; set; }//timer from zero to one for a disaster, it can be increased or decreased by factors in the country, if it hits one we have a disaster
        //posible disasters: rapid inflation(economic crash), mass disease, mass immigration/migration, cost of living increase, political disaster, etc

        //main variables that we will expose to the user to edit
        //population
        //economy goodness(affects all economic variables?)
        //country health(affectsfertility/birth rate and healthcare and disease and etc)
        
        public void Init()
        {
            
        }

        public void LoadFromJson(string json)
        {
            //all the same format
            
        }

        public void Update()
        {
            //temporarily set the data to an amount to allow the frontend to test if it displays properly
            //this is not necesarily indicitave of what the data values should be, just test values
            livingCost = 10.0f;
            
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
            livingCostPerGdpPerCapita = 10.0f;
        }
        
    }
}
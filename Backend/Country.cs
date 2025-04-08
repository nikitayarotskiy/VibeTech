namespace Backend
{
    public class Country
    {
        //economy related
        public float livingCost;
        
        //population related
        public float fertilityRate;
        public float healthCareStrength;
        public float immigrationRate;
        public float migrationRate;
        public float mortalityRate;
        
        //statistic related
        public float povertyRate;
        public float crimeRate;
        
        //internal simulation variables
        public float population;
        public float gdp;
        public float livingCostPerGdpPerCapita;//gives a ratio of individual living cost and ratio per household, if it is 1 then you have an equal amount of income and expenses, over 1 and you have a ratio under one you are going in debt, more expenses and less income, if you have over 1 you have more income than expenses

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
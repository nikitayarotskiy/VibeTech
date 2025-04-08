using System.Text.Json;

namespace Backend
{
    public class Country
    {
        //economy related
        
        /// <summary>
        /// cost of living, dollar value
        /// </summary>
        public double livingCost { get; set; }
        
        //population related
        /// <summary>
        /// how many citizens are born per month, one int is one citizen
        /// </summary>
        public double fertilityRate { get; set; }
        /// <summary>
        /// scale of zero to one, zero means that every disease is uncurable, one means that every disease is cured
        /// </summary>
        public double healthCareStrength { get; set; }
        /// <summary>
        /// scale of zero to one, zero means that nobody gets diseases, one means that every citizen gets a disease every month
        /// </summary>
        public double diseaseRate { get; set; }
        /// <summary>
        /// strength of disease from zero to one, zero means that no death chance from disease, one means that every disease causes death
        /// </summary>
        public double diseaseStrength { get; set; }
        /// <summary>
        /// how many citizens are moving in per month, one int is once citizen
        /// </summary>
        public double immigrationRate { get; set; }
        /// <summary>
        /// how many citizens are moving out per month, one int is once citizen
        /// </summary>
        public double migrationRate { get; set; }
        /// <summary>
        /// how many citizens are dying per month, one int is once citizen
        /// </summary>
        public double mortalityRate { get; set; }
        
        //statistic related
        /// <summary>
        /// scale of zero to one, where zero is no poverty and one is every citizen is in poverty, if under livingCostPerGdpPerCapita for lots of time then the citizen is added to this number
        /// </summary>
        public double povertyRate { get; set; }
        /// <summary>
        /// scale of zero to one, zero meaning no crime and one meaning each citizen commits a crime every month
        /// </summary>
        public double crimeRate { get; set; }
        
        //internal simulation variables
        /// <summary>
        /// population of the country, no limit
        /// </summary>
        public double population { get; set; }
        /// <summary>
        /// gdp of the country, dollar value, no limit on number
        /// </summary>
        public double gdp { get; set; }
        /// <summary>
        /// inflation as a scalar 1.0f gives no inflation, 1.02f gives 2 percent, etc
        /// </summary>
        public double inflation { get; set; }
        /// <summary>
        /// gives a ratio of individual living cost and ratio per household, if it is 1 then you have an equal amount of income and expenses, over 1 and you have a ratio under one you are going in debt, more expenses and less income, if you have over 1 you have more income than expenses
        /// </summary>
        public double livingCostPerGdpPerCapita { get; set; }
        /// <summary>
        /// timer from zero to one for a disaster, it can be increased or decreased by factors in the country, if it hits one we have a disaster
        /// </summary>
        public double disasterChance { get; set; }
        
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
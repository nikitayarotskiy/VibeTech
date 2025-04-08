namespace Backend
{
    public static class World
    {
        public static List<Country> countries;
        public static int countryCount = 195;

        public static void Init()
        {
            countries = new List<Country>();
            for (int i = 0; i < countryCount; i++)
            {
                //pass in data here to country
                countries.Add(new Country());
                countries[i].Init();
                //load from index of json
                countries[i].LoadFromJson("");
            }
        }

        public static void Update(float dt)
        {
            for (int i = 0; i < countryCount; i++)
            {
                countries[i].Update(dt);
                //Console.WriteLine(countries[i].population);
            }
        }
    }
}
namespace Backend
{
    public static class World
    {
        public static Country country;
        public static int MonthCount;
        public static int countryCount = 1;

        public static void Init()
        {
            country = new Country();
            country.Init();
        }

        public static void Update(float dt)
        {
            country.Update(dt);
        }
    }
}
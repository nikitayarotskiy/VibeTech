using System.Net.Http.Headers;

namespace Backend
{
    public static class Sender
    {
        public static HttpClient client;

        public static void Init()
        {
            client = new HttpClient();
            //port must be 4000
            client.BaseAddress = new Uri("http://localhost:4000/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        
        public static void SendData(ref Country country)
        {
            
        }

        public static void RecieveData()
        {
            
        }
    }
}
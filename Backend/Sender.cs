using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace Backend
{
    public static class Sender
    {
        public static HttpClient client;

        public static void Init()
        {
            client = new HttpClient();
            //port must be 4000
            client.BaseAddress = new Uri("http://localhost:3000/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        
        public static async void SendData(Country country)
        {
            //needs await because sending and receiving a confirmation that it sent can take time
            await POSTCountry(country);
        }
        
        //stolen from microsoft docs
        public static async Task<Uri> POSTCountry(Country country)
        {
            HttpResponseMessage response = await client.PostAsJsonAsync(
                "api/products", country);
            response.EnsureSuccessStatusCode();

            // return URI of the created resource.
            return response.Headers.Location;
        }


        public static void RecieveData()
        {
            
        }
    }
}
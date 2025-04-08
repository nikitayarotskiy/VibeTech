using System.Net;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;

namespace Backend
{
    public static class Sender
    {
        public static HttpListener listener;
        public static int currentSelectedCountry;

        public static void Init()
        {
            listener = new HttpListener();
            listener.Prefixes.Add("http://10.182.160.243:4000/api/lifeleap/getCountryData/");
            listener.Prefixes.Add("http://10.182.160.243:4000/api/lifeleap/setCountryData/");
            listener.Prefixes.Add("http://10.182.160.243:4000/api/lifeleap/updateCountryData/");
            try
            {
                listener.Start();
            }
            catch (HttpListenerException hlex)
            {
                Console.WriteLine(hlex);
            }
        }

        public static void Listen()
        {
            Console.WriteLine("Listening...");
            var context = listener.GetContext();
                
            HttpListenerRequest request = context.Request;
            // Obtain a response object.
            HttpListenerResponse response = context.Response;
            
            response.AddHeader("Access-Control-Allow-Origin", "*");
            response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            response.AddHeader("Access-Control-Allow-Headers", "Content-Type");
            //response.AddHeader("Access-Control-Allow-Credentials", "true");
            //response.AddHeader("Access-Control-Allow-Headers", "Content-Type");
            
            //check for each api thing
            if (request.RawUrl.Equals("/api/lifeleap/getCountryData"))
            {
                // Get a response stream and write the response to it.
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(
                    new System.IO.StreamReader(request.InputStream, request.ContentEncoding).ReadToEnd());
                response.StatusCode = 200;
                response.ContentLength64 = buffer.Length;
                response.ContentType = "application/json";
                string json = JsonSerializer.Serialize(World.country);
                
                response.OutputStream.Write(System.Text.Encoding.UTF8.GetBytes(json));
            }
            else if (request.RawUrl.Equals("/api/lifeleap/setCountryData"))
            {
                // Get a response stream and write the response to it.
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(
                    new System.IO.StreamReader(request.InputStream, request.ContentEncoding).ReadToEnd());
                response.StatusCode = 200;
                response.ContentType = "application/json";
                response.ContentLength64 = buffer.Length;
                try
                {
                    currentSelectedCountry = Int32.Parse(System.Text.ASCIIEncoding.Default.GetString(buffer));
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
                currentSelectedCountry = Int32.Parse(System.Text.ASCIIEncoding.Default.GetString(buffer));
            }
            else if (request.RawUrl.Equals("/api/lifeleap/updateCountryData"))
            {
                // Get a response stream and write the response to it.
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(
                    new System.IO.StreamReader(request.InputStream, request.ContentEncoding).ReadToEnd());
                response.StatusCode = 200;
                response.ContentLength64 = buffer.Length;
                response.ContentType = "application/json";
                string json = System.Text.ASCIIEncoding.Default.GetString(buffer);
                Console.WriteLine(json);
                World.country.LoadFromJson(json);
                response.OutputStream.Write(System.Text.Encoding.UTF8.GetBytes(World.country.LoadToJson()));
            }
            
            response.Close();
        }
    }
}
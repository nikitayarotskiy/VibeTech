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

        public static void Init()
        {
            listener = new HttpListener();
            listener.Prefixes.Add("http://10.182.160.243:4000/api/lifeleap/sendData/");
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
            response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
            response.AddHeader("Access-Control-Max-Age", "1728000");
            response.AddHeader("Access-Control-Max-Forwards", "true");
            response.AddHeader("Access-Control-Allow-Credentials", "true");
            response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
            
            // Get a response stream and write the response to it.
            byte[] buffer = System.Text.Encoding.UTF8.GetBytes(
                new System.IO.StreamReader(request.InputStream, request.ContentEncoding).ReadToEnd());
            response.StatusCode = 200;
            response.ContentLength64 = buffer.Length;
            string myString = System.Text.ASCIIEncoding.Default.GetString(buffer);
            Console.WriteLine(myString);
            response.OutputStream.Write(System.Text.Encoding.UTF8.GetBytes("{\"population\":40000000,\"gdp\":2100000000000,\"lgc\":1.09375,\"oldlgc\":1.09375,\"oldoldlgc\":1.09375,\"livingCost\":48000,\"inflation\":1.02,\"deltaHealth\":1,\"healthcareEfficacy\":0.95,\"diseaseSeverity\":0.2,\"diseaseAmount\":0.05,\"immigrationRate\":39166,\"baseImmigrationRate\":37500,\"baseFertility\":0,\"baseMortality\":0,\"fertility\":0,\"mortality\":0}\n"));
            response.Close();
        }
    }
}
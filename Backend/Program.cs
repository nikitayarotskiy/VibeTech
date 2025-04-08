using System;
using System.Net;

//https://learn.microsoft.com/en-us/aspnet/web-api/overview/advanced/calling-a-web-api-from-a-net-client

namespace Backend
{
    public static class Program
    {
        static float lastTime;
        static float totalTimeUpdate;
        static void Main(string[] args)
        {
            World.Init();
            Sender.Init();
            
            lastTime = DateTime.Now.ToUniversalTime().Second + (DateTime.Now.ToUniversalTime().Millisecond / 1000f);
            
            while (true)
            {
                float currentTime = DateTime.Now.ToUniversalTime().Second + (DateTime.Now.ToUniversalTime().Millisecond / 1000f);

                float dt = currentTime - lastTime;

                //total time update is the delta time for some reason
                totalTimeUpdate += dt;
                while (totalTimeUpdate >= Global.updateRate)
                {
                    totalTimeUpdate -= Global.updateRate;
                    World.Update(totalTimeUpdate);
                    Sender.Listen();
                }

                lastTime = currentTime;
            }
        }
    }
}
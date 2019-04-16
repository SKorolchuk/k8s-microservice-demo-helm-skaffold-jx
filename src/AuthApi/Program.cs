using Infrastructure.Runtime;
using Microsoft.AspNetCore.Hosting;

namespace AuthApi
{
    public class Program
    {
		public static void Main(string[] args)
        {
	        using (var server = new SelfHostServerBuilder<Startup>(args))
			{
		        server.Build().Run();
	        }
        }
    }
}

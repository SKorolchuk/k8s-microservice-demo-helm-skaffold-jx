using System.Threading.Tasks;

namespace Infrastructure.Notification
{
	public interface ISmsSender
	{
		Task SendSmsAsync(string number, string message);
	}
}

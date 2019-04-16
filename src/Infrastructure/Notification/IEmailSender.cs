using System.Threading.Tasks;

namespace Infrastructure.Notification
{
	public interface IEmailSender
	{
		Task SendEmailAsync(string email, string subject, string message);
	}
}
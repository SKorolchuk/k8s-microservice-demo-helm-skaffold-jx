using System.ComponentModel.DataAnnotations;

namespace AuthApi.Models
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}

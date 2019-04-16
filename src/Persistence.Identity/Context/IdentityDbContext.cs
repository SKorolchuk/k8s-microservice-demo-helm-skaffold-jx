using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Persistence.Identity.Identity;

namespace Persistence.Identity.Context
{
    public class IdentityDbContext : IdentityDbContext<ApplicationUser>
	{
		public IdentityDbContext(DbContextOptions options) : base(options) { }
	}
}

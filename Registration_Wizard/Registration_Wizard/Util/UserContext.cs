using System.Data.Entity;
using Registration_Wizard.Models;

namespace Registration_Wizard.Util
{
    public class UserContext : DbContext
    {
        public UserContext() : base("RegistrationWizard")
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
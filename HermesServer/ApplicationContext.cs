using Microsoft.EntityFrameworkCore;

using HermesServer.Models;

namespace HermesServer
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext() => Database.EnsureCreated();
        public DbSet<Message> Messages => Set<Message>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=HermesDB;Username=postgres;Password=pg317");
        }
    }
}

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using URL_Shortener.Models;

namespace URL_Shortener.Data
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<UrlShortener> UrlShorteners { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

    }
}

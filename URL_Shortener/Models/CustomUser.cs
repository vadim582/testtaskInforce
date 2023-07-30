using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace URL_Shortener.Models
{
    public class CustomUser
    {
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
        public string ReturnUrl { get; set; }
    }
}

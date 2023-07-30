using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace URL_Shortener.Models
{
    public class UrlShortener
    {
        public int Id { get; set; }
        public string OriginalUrl { get; set; }
        public string ShortenedUrl { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
    }
}

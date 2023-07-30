using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using URL_Shortener.Data;
using URL_Shortener.Models;

namespace URL_Shortener.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShortUrlController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ShortUrlController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<UrlShortener>> GetAllShortUrls()
        {
            return _context.UrlShorteners.ToList();
        }

        [HttpPost]
        public ActionResult<UrlShortener> ShortenUrl([FromBody] UrlShortener newUrl)
        {
            var existingShortUrl = _context.UrlShorteners
                .FirstOrDefault(u => u.OriginalUrl == newUrl.OriginalUrl);

            if (existingShortUrl != null)
            {
                return BadRequest("The URL has already been shortened.");
            }
            const string allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var shortCodeLength = 6;

            var random = new Random();
            var shortCodeBuilder = new StringBuilder();

            for (int i = 0; i < shortCodeLength; i++)
            {
                shortCodeBuilder.Append(allowedChars[random.Next(allowedChars.Length)]);
            }

            var shortCode = shortCodeBuilder.ToString();

            var shortenedUrl = new UrlShortener
            {
                OriginalUrl = newUrl.OriginalUrl,
                ShortenedUrl = $"https://anvs.short.gy/{shortCode}",
                CreatedDate = DateTime.UtcNow,
                CreatedBy = "User"
            };

            _context.UrlShorteners.Add(shortenedUrl);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetAllShortUrls), new { id = shortenedUrl.Id }, shortenedUrl);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteShortUrl(int id)
        {
            var url = _context.UrlShorteners.Find(id);
            if (url == null)
            {
                return NotFound();
            }

            _context.UrlShorteners.Remove(url);
            _context.SaveChanges();

            return NoContent();
        }
        [HttpGet("{id}")]
        public IActionResult GetShortUrl(int id)
        {
            var url = _context.UrlShorteners.Find(id);
            if (url == null)
            {
                return NotFound();
            }

            return Ok(url);
        }
    }
}
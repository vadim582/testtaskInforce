import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShortUrlService } from '../short-url.service';
import { UrlShortener } from '../short-urls-table/url-shortener.model';

@Component({
  selector: 'app-short-url-info',
  templateUrl: './short-url-info.component.html',
  styleUrls: ['./short-url-info.component.css']
})
export class ShortUrlInfoComponent implements OnInit {
  urlInfo: UrlShortener;

  constructor(
    private route: ActivatedRoute,
    private shortUrlService: ShortUrlService
  ) { }

  ngOnInit() {
    // Get the URL ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const urlId = +params.get('id');
      if (urlId) {
        // Fetch the URL details from the backend
        this.shortUrlService.getShortUrlInfo(urlId).subscribe(
          (data) => {
            this.urlInfo = data;
          },
          (error) => {
            console.error('Error fetching URL info:', error);
          }
        );
      }
    });
  }
}

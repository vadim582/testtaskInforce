import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShortUrlService } from '../short-url.service';
import { UrlShortener } from './url-shortener.model';

@Component({
  selector: 'app-short-urls-table',
  templateUrl: './short-urls-table.component.html',
  styleUrls: ['./short-urls-table.component.css']
})
export class ShortUrlsTableComponent implements OnInit {
  shortUrls: UrlShortener[] = [];
  newUrl: string = '';

  constructor(private shortUrlService: ShortUrlService, private router: Router) { }
  viewShortUrlDetails(id: number) {
    this.router.navigate(['/short-urls', id]);
  }
  ngOnInit() {
    this.loadShortUrls();
  }

  loadShortUrls() {
    this.shortUrlService.getAllShortUrls().subscribe(
      (data) => {
        this.shortUrls = data;
      },
      (error) => {
        console.error('Error fetching short URLs:', error);
      }
    );
  }

  deleteShortUrl(id: number) {
    this.shortUrlService.deleteShortUrl(id).subscribe(
      () => {
        this.shortUrls = this.shortUrls.filter((url) => url.id !== id);
      },
      (error) => {
        console.error('Error deleting short URL:', error);
      }
    );
  }

  onAddUrlSubmit() {
    if (this.newUrl) {
      this.shortUrlService.shortenUrl(this.newUrl).subscribe(
        (data) => {
          this.shortUrls.push(data);
          this.newUrl = '';
        },
        (error) => {
          console.error('Error shortening URL:', error);
        }
      );
    }
  }
}

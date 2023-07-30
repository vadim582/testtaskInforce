import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlShortener } from '..//app/short-urls-table/url-shortener.model';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  private apiUrl = 'api/shorturl';

  constructor(private http: HttpClient) { }

  getAllShortUrls(): Observable<UrlShortener[]> {
    return this.http.get<UrlShortener[]>(this.apiUrl);
  }

  deleteShortUrl(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  shortenUrl(originalUrl: string): Observable<UrlShortener> {
    return this.http.post<UrlShortener>(this.apiUrl, { originalUrl });
  }
  getShortUrlInfo(id: number): Observable<UrlShortener> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UrlShortener>(url);
  }
}

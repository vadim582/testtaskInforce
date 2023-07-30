export interface UrlShortener {
  id: number;
  originalUrl: string;
  shortenedUrl: string;
  createdDate: Date;
  createdBy: string;
}

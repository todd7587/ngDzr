import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from './track';

@Injectable()
export class DzrService {
  constructor(private httpClient : HttpClient) {}

  searchTracks(): Track[] {
    return null;
  }
}

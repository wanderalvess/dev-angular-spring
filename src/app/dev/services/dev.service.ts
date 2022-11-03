import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dev } from '../model/dev';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Dev>(this.API);
  }
}

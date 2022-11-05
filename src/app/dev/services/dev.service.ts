import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Dev } from '../model/dev';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private readonly API = 'api/clientes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Dev[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(dev => console.log )

    );
  }
}

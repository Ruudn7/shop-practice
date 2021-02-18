import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactMessage } from './../types/static';

@Injectable({
  providedIn: 'root'
})
export class StaticPagesService {

  url = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  addConntact(message: ContactMessage): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(`
        ${this.url}contact
    `, message);
  }
}

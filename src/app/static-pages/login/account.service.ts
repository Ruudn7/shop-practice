import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/types/account';

@Injectable({
    providedIn: 'root'
})

export class AccountService {

    url = 'http://localhost:3000/';

    constructor(
        private http: HttpClient
    ) {}

    loginUser(user: Pick<Account, 'userLogin' | 'userPassword'>): Observable<Account> {
        return this.http.get<Account>(`
            ${this.url}users?user.userLogin=${user.userLogin}&user.userPassowrd=${user.userPassword}
        `);
    }

    createUser(user: Account): Observable<Account> {
        return this.http.post<Account>(`
            ${this.url}users
        `, user);
    }

    getUser(): Observable<Pick<Account, 'userLogin' | 'userPassword'>[]> {
        return this.http.get<Pick<Account, 'userLogin' | 'userPassword'>[]>(`${this.url}users`);
    }
}



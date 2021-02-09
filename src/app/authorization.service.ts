import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Roles } from './types/account';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    baseUrl = 'http://localhost:3000/';

    constructor(
        private http: HttpClient
    ) {}

    public getSession(): Promise<boolean> {
        const session = localStorage.getItem('token');
        return new Promise((resolve, reject) => {
            if (session) {
                return resolve(true);
            } else {
                return reject(false);
            }
        });
    }

    public getUserRoles(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.baseUrl}roles`)
            .pipe(catchError((error: any, caught: any) => {
                reject(error);
                return caught;
            }),
            map((res: any) => res))
            .subscribe((role: string[]) => {
                resolve(role);
            });
        });
    }

    public areUserRolesAllowed(userRoles: string[], allowedUserRoles: Roles[]): boolean {
        for (const role of userRoles) {
          for (const allowedRole of allowedUserRoles) {
            if (role.toLowerCase() === allowedRole.toLowerCase()) {
              return true;
            }
          }
        }
        return false;
    }
}

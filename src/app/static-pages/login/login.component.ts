import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Account } from 'src/app/types/account';

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginPageComponent {

    constructor(
        private loginServ: LoginService
    ) {}

    save(userData: Pick<Account, 'userLogin' | 'userPassword'>): any {
        console.log(userData);
        this.loginServ.loginUser(userData).subscribe(
            (res: any) => {
                console.log(res);
            }
        );
    }

    getUsers(): any {
        this.loginServ.getUser().subscribe(
            (res: any) => {
                console.log(res);
            }
        );
    }
}

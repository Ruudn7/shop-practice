import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/types/account';

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginPageComponent {

    constructor(
        private loginServ: LoginService,
        private toastr: ToastrService,
        private route: Router
    ) {}

    save(userData: Pick<Account, 'userLogin' | 'userPassword'>): any {
        this.loginServ.loginUser(userData).subscribe(
            (res: any) => {
                res && res.length ? this.correctLogin() : this.errorLogin();
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

    correctLogin(): void {
        localStorage.setItem('loginStatus', 'login');
        this.toastr.success('Zalogowano poprawnie');
        setTimeout(() => {
            this.route.navigateByUrl('');
        }, 500);
    }

    errorLogin(): void {
        this.toastr.error('Dane niepoprawne');
    }
}

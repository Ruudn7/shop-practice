import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/types/account';

import { AccountService } from './account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginPageComponent {

    registerForm = false;

    constructor(
        private accountServ: AccountService,
        private toastr: ToastrService,
        private route: Router
    ) {}

    loginUser(userData: Pick<Account, 'userLogin' | 'userPassword'>): void {
        this.accountServ.loginUser(userData).subscribe(
            (res: any) => {
                res && res.length ? this.correctLogin() : this.errorLogin();
            }
        );
    }

    createAccount(userData: Account): void {
        this.accountServ.createUser(userData).subscribe(
            (res: any) => {
                res ? this.correctLogin() : this.errorCreate();
            }
        );
    }

    correctLogin(): void {
        localStorage.setItem('token', 'sampleToken');
        this.toastr.success('Zalogowano poprawnie');
        setTimeout(() => {
            this.route.navigateByUrl('');
        }, 500);
    }

    errorLogin(): void {
        this.toastr.error('Dane niepoprawne');
    }

    errorCreate(): void {
        this.toastr.error('Błąd podczas tworzenia konta, spróbuj ponownie');
    }
}

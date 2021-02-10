import { AccountService } from './../../static-pages/login/account.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLogin = this.accountServ.correctLogin();
  mySubscription = new Subscription();
  constructor(
    private accountServ: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogin = this.accountServ.correctLogin();
      }
    });
  }

  logout(): void {
    this.accountServ.logout();
    this.isLogin = false;
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}

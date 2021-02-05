import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLogin = localStorage.getItem('loginStatus') === 'login';
  mySubscription = new Subscription();
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogin = localStorage.getItem('loginStatus') === 'login';
      }
    });
  }

  logout(): void {
    localStorage.removeItem('loginStatus');
    this.isLogin = false;
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}

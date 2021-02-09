import { Roles } from './types/account';
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot} from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    @Inject(AuthorizationService) private authorizationService: AuthorizationService,
    @Inject(Router) private router: Router
  ) {}

   public async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const allowedUserRoles = this.getRoutePermissions(route);
    return await this.checkPermission(allowedUserRoles);
  }

  public async canActivateChild(route: ActivatedRouteSnapshot): Promise<boolean> {
    const allowedUserRoles = this.getRoutePermissions(route);
    return await this.checkPermission(allowedUserRoles);
  }

  public canLoad(): Promise<boolean> {
    return this.checkPermission([]);
  }

  private getRoutePermissions(route: ActivatedRouteSnapshot): Roles[] {
    if (route.data && route.data[0].userRoles) {
      return route.data[0].userRoles as Roles[];
    }
    return [];
  }

  private checkPermission(allowedUserRoles: Roles[]): Promise<boolean> {
    return this.authorizationService.getSession().then((session: boolean) => {

        if (session) {
            if (!allowedUserRoles.length) {
            return true;   // if no user roles has been set, all user are allowed to access the route
            } else {
                return this.authorizationService.getUserRoles().then((userRoles: string[]) => {

                    if (this.authorizationService.areUserRolesAllowed( Object.values(userRoles), allowedUserRoles)) {
                    return true;
                } else {
                    this.router.navigateByUrl('/');
                    return false;
                }
            });
            }
        } else { return false; }
    }).catch(
        () => {
            this.router.navigateByUrl('/');
            return false;
        }
    );
  }
}

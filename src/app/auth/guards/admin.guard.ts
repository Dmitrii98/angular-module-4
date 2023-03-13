import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserStoreService } from '../../user/services/user-store.service';
import { RouterUtilsService } from './router-utils.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private userStoreService: UserStoreService,
        private routerUtilsService: RouterUtilsService
    ) { }

    canActivate(): Observable<boolean | UrlTree> {
        return this.userStoreService.isAdmin$.pipe(
            map(isAdmin => {
                if (isAdmin) {
                    return true;
                } else {
                    return this.routerUtilsService.createUrlTree(['/courses']);
                }
            })
        );
    }

}
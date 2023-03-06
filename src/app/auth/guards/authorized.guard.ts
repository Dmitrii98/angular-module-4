import { Injectable } from "@angular/core";
import {
    CanLoad,
    Route,
    UrlSegment,
    UrlTree,
    Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class AuthorizedGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean | UrlTree> {
        return this.authService.isAuthorized$.pipe(
            map((isAuthorized) => {
                if (isAuthorized) {
                    return true;
                }
                return this.router.parseUrl("/login");
            })
        );
    }
}
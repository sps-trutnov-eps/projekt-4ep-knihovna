import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { SignInService } from 'src/app/core/sign-in/sign-in.service';

export const SIGN_IN_URL = new InjectionToken<string>("Sign in page url.");

@Injectable({
    providedIn: 'root'
})
export class SignedInCanActivate  {
    constructor(private readonly signInService: SignInService, @Inject(SIGN_IN_URL) private readonly signInUrl: string) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let signedIn = this.signInService.signedUser !== null;

        if (!signedIn)
            window.location.href = this.signInUrl + "?redirectUrl=" + window.location.href;

        return signedIn;
    }
}
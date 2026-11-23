import { Component, InjectionToken, Inject } from '@angular/core';
import { User } from 'src/app/core/users/user';
import { SignInService } from 'src/app/core/sign-in/sign-in.service';
import { Location } from '@angular/common';

export const SIGN_OUT_URL = new InjectionToken<string>("Sign out page url.");
export const USER_MODULE_URL = new InjectionToken<string>("User module root page url.");
export const LIBRARIAN_MODULE_URL = new InjectionToken<string>("Librarian module root page url.");

@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss'],
    standalone: false
})
export class MainNavigationComponent {
    get signedUser(): User {
        return this.signInService.signedUser;
    }

    constructor(private readonly signInService: SignInService, @Inject(SIGN_OUT_URL) private readonly signOutUrl: string, 
        @Inject(USER_MODULE_URL) readonly userModuleUrl: string, @Inject(LIBRARIAN_MODULE_URL) readonly librarianModuleUrl: string, 
        private readonly location: Location) {
    }

    signOut() {
        this.signInService.signOut();
        window.location.href = this.signOutUrl + "?redirectUrl=" + this.userModuleUrl;
    }
}

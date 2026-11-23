import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { UsersComponent } from './pages/users/users.component';
import { MainNavigationComponent, SIGN_OUT_URL, USER_MODULE_URL, LIBRARIAN_MODULE_URL } from './pages/app/main-navigation/main-navigation.component';
import { AlertViewComponent } from './alerts/alert-view/alert-view.component';
import { API_URL } from './core/api/api';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MainFooterComponent } from './pages/app/main-footer/main-footer.component';
import { SIGN_IN_URL } from './routing/can-activates/signed-in-can-activate';
import { WithCredentialsHttpInterceptor } from './http-interceptors/with-credentials-http-interceptor';
import { AppInitializeService } from './app-initialize.service';

export function createAppInitializer(appInitializeService: AppInitializeService) {
    return async () => await appInitializeService.intialize();
}

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        MainNavigationComponent,
        AlertViewComponent,
        ConfirmDialogComponent,
        MainFooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: WithCredentialsHttpInterceptor,
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: createAppInitializer,
            deps: [AppInitializeService],
            multi: true
        },
        {
            provide: API_URL,
            useValue: "/knihovna/sysadmin/api"
        },
        {
            provide: SIGN_IN_URL,
            useValue: "/knihovna/authentication/signIn.php"
        },
        {
            provide: SIGN_OUT_URL,
            useValue: "/knihovna/authentication/signOut.php"
        },
        {
            provide: USER_MODULE_URL,
            useValue: "/knihovna/uzivatel"
        },
        {
            provide: LIBRARIAN_MODULE_URL,
            useValue: "/knihovna/knihovnik"
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

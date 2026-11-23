import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { UserService } from 'src/app/core/users/user.service';
import { User } from 'src/app/core/users/user';
import { UserViewModel } from './user-view-model';
import { AlertService } from 'src/app/alerts/alert.service';
import { AlertType } from 'src/app/alerts/alert-type';
import { UserNameAlreadyUsedError } from 'src/app/core/users/user-name-already-used-error';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { UserHasActiveBorrowsError } from 'src/app/core/users/user-has-active-borrows-error';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    standalone: false
})
export class UsersComponent implements OnInit, DoCheck {
    users: UserViewModel[];
    newUser: UserViewModel;

    filterForm = new FormGroup({
        id: new FormControl("", this.idFilterValidator),
        userName: new FormControl(""),
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        email: new FormControl(""),
        isLibrarian: new FormControl(false),
        isAdministrator: new FormControl(false)
    });

    get hasChanges(): boolean {
        return this.users !== undefined && this.users.some(u => (u.isChanged || u.original === null) && u !== this.newUser)
    }

    get isAllValid(): boolean {
        return this.users === undefined || this.users.every(u => u.isValid || u === this.newUser);
    }

    get isFiltred(): boolean {
        return this.filterForm.get("id").value != "" || this.filterForm.get("userName").value != "" || this.filterForm.get("firstName").value != "" ||
            this.filterForm.get("lastName").value != "" || this.filterForm.get("email").value != "" || this.filterForm.get("isLibrarian").value != false ||
            this.filterForm.get("isAdministrator").value != false;
    }

    get isIdFilterValid(): boolean {
        return !this.filterForm.get("id").invalid;
    }

    get changesText(): string {
        if (this.users === undefined)
            return "";

        let changesCount = this.users
            .filter(u => u.isChanged)
            .length;

        if (changesCount === 0)
            return "";
        else if (changesCount === 1)
            return `${changesCount} změna.`;
        else if (changesCount > 1 && changesCount < 5)
            return `${changesCount} změny.`;
        else
            return `${changesCount} změn.`;
    }

    constructor(private readonly userService: UserService, private readonly alertService: AlertService) {
        this.filterForm.valueChanges.subscribe(async () => {
            this.users = undefined;

            await this.refreshUsers();

            if (!this.isFiltred)
                this.addNewUser();
        });
    }

    async ngOnInit() {
        await this.refreshUsers();
        this.addNewUser();
    }

    ngDoCheck() {
        if (this.newUser != undefined && this.newUser.isChanged)
            this.addNewUser();

        if (this.hasChanges)
            this.filterForm.disable({ emitEvent: false });
        else
            this.filterForm.enable({ emitEvent: false });
    }

    private async refreshUsers() {
        let idFilterControl = this.filterForm.get("id");
        let idFilter = idFilterControl.value;
        let userNameFilter = this.filterForm.get("userName").value;
        let firstNameFilter = this.filterForm.get("firstName").value;
        let lastNameFilter = this.filterForm.get("lastName").value;
        let emailFilter = this.filterForm.get("email").value;
        let isLibrarianFilter = this.filterForm.get("isLibrarian").value;
        let isAdministratorFilter = this.filterForm.get("isAdministrator").value;

        let options = {
            ...idFilter !== "" && !idFilterControl.invalid && { idFilter: parseInt(idFilter) },
            ...userNameFilter !== "" && { userNameFilter },
            ...firstNameFilter !== "" && { firstNameFilter },
            ...lastNameFilter !== "" && { lastNameFilter },
            ...emailFilter !== "" && { emailFilter },
            ...isLibrarianFilter !== false && { isLibrarianFilter },
            ...isAdministratorFilter !== false && { isAdministratorFilter }
        };

        this.users = (await this.userService.getAll(options).toPromise())
            .map(u => new UserViewModel(u, u.userName, "", u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator));
    }

    private addNewUser() {
        this.newUser = new UserViewModel(null, "", "", "", "", "", false, false);
        this.users.unshift(this.newUser);
    }

    async save(user: UserViewModel) {
        let newUser;
        if (user.original != null) {
            let u = new User(user.original.id, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
            let newPassword = user.newPassword === "" ? undefined : user.newPassword;
            try {
                newUser = await this.userService.update(u, newPassword).toPromise();
            }
            catch (e) {
                if (e instanceof UserNameAlreadyUsedError) {
                    this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, AlertType.error);
                    return;
                }
                throw e;
            }
        }
        else {
            let u = new User(0, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
            try {
                newUser = await this.userService.add(u, user.newPassword).toPromise();
            }
            catch (e) {
                if (e instanceof UserNameAlreadyUsedError) {
                    this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, AlertType.error);
                    return;
                }
                throw e;
            }
        }
        user.original = newUser;
        user.resetToOriginal();
    }

    discard(user: UserViewModel) {
        if (user.original == null)
            this.users.splice(this.users.indexOf(user), 1);
        else
            user.resetToOriginal();
    }

    async remove(user: UserViewModel) {
        try {
            await this.userService.remove(user.original).toPromise();
            this.users.splice(this.users.indexOf(user), 1);
        }
        catch (e) {
            if (e instanceof UserHasActiveBorrowsError) {
                this.alertService.show("Nelze smazat uživatele s aktivními výpůjčkami.", AlertType.error);
                return;
            }
            throw e;
        }
    }

    saveAll() {
        this.users
            .filter(u => u.isChanged)
            .forEach(u => this.save(u));
    }

    discardAll() {
        this.users
            .filter(u => u.isChanged || u.original === null && u !== this.newUser)
            .forEach(u => this.discard(u));
    }

    private idFilterValidator(control: AbstractControl): ValidationErrors | null {
        if (/^(0|(-?[1-9][0-9]*)|)$/.test(control.value))
            return null;
        else
            return { invalidId: true };
    }

    import() {
        let kontrola = 0;
        let validniRadky = [];
        let element = document.createElement("input");
        element.type = "file";
        element.addEventListener("change", () => {
            let file = element.files[0];
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = () => {
                let soubor = <string>reader.result;
                let radky = soubor.split(/\r\n?|\n/);

                for (let i = 0; i < radky.length; i++) {
                    let atributyUsera = radky[i].split(",");
                    if (atributyUsera.length != 7 || (atributyUsera[5] != "true" && atributyUsera[5] != "false") || (atributyUsera[6] != "true" && atributyUsera[6] != "false")) {
                        this.alertService.show("Chyba na řádku " + (i + 1), AlertType.error);
                        kontrola++;
                    }
                    else {
                        validniRadky.push(atributyUsera);
                    }
                }
                if (kontrola == 0) {
                    for (let i = 0; i < radky.length; i++) {
                        let validniRadek = validniRadky.pop();
                        let uzivatel = new UserViewModel(null, validniRadek[0], validniRadek[1], validniRadek[2], validniRadek[3], validniRadek[4], validniRadek[5] === "true", validniRadek[6] === "true");
                        this.users.unshift(uzivatel);
                    }
                }
            }
        });
        element.click();
    }

    async export() {
        let soubor = "";
        let uzivatele = await this.userService.getAll().toPromise();
        for (let i = 0; i < uzivatele.length; i++) {
            let uzivatel = uzivatele[i];
            if (i != 0)
                soubor += "\n";
            soubor += uzivatel.userName;
            soubor += ",";
            soubor += uzivatel.firstName;
            soubor += ",";
            soubor += uzivatel.lastName;
            soubor += ",";
            soubor += uzivatel.email;
            soubor += ",";
            soubor += uzivatel.isLibrarian;
            soubor += ",";
            soubor += uzivatel.isAdministrator;
        }
        this.downloadBlob("Sysadmin - export uživatelů.txt", new Blob([soubor]));
    }

    private downloadBlob(fileName: string, blob: Blob) {
        let url = URL.createObjectURL(blob);

        let linkElement = document.createElement("a");
        linkElement.download = fileName;
        linkElement.href = url;

        linkElement.click();

        URL.revokeObjectURL(url);
    }
}

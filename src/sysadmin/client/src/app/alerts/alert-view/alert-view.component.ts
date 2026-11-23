import { Component } from '@angular/core';
import { AlertService } from '../alert.service';
import { Alert } from '../alert';
import { AlertType } from '../alert-type';

@Component({
    selector: 'app-alert-view',
    templateUrl: './alert-view.component.html',
    styleUrls: ['./alert-view.component.scss'],
    standalone: false
})
export class AlertViewComponent {
    get activeAlerts(): Alert[] {
        return this.alertService.active;
    }

    getAlertClass(alert: Alert): string {
        switch (alert.type) {
            case AlertType.warning:
                return "alert-warning";
            case AlertType.error:
                return "alert-danger";
            default:
                return "alert-info";
        }
    }

    constructor(private readonly alertService: AlertService) { 

    }
}

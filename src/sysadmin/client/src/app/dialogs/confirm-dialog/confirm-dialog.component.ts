import { Component, TemplateRef, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
    standalone: false
})
export class ConfirmDialogComponent implements AfterViewInit {
    @Input()
    title: string;
    @Input()
    message: string;
    @Output()
    close = new EventEmitter<boolean>();
    @ViewChild("modal", { static: true }) 
    modal: ElementRef<any>;

    confirmed = false;

    ngAfterViewInit() {
        // @ts-ignore
        let modalElement = $(this.modal.nativeElement);

        modalElement.modal({});
        modalElement.on("hidden.bs.modal", () => this.close.emit(this.confirmed));
    }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'darkside-alert',
  template: `
    <div *ngIf="show"
         class="inline-block px-6 py-4 border-0 border-l-8 relative mb-4 text-justify {{ themeCSS }} {{ borderColor }}">
      <div class="pr-8">
        <ng-content></ng-content>
      </div>
      <button
        class="absolute right-0 top-0 mt-2 mr-4 text-3xl font-semibold leading-none outline-none focus:outline-none"
        (click)="show = false"
      >×
      </button>
    </div>
  `
})
export class AlertComponent {
  @Input() show = true;
  @Input() borderColor = 'border-red-400';
  @Input() themeCSS = 'text-white bg-blue-500';
}

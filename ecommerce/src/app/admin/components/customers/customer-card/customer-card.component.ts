import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css'
})
export class CustomerCardComponent {
  @Input() user: any
}

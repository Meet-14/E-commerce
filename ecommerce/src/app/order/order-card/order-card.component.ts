import { Component, Input } from '@angular/core';
import { ApiOrderService } from '../../API/order/api-order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent {
  @Input() orderStatus: any;
  @Input() orderItems: any;
}

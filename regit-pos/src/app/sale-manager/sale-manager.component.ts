import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sale } from './sale-manager';

@Component({
  selector: 'app-sale-manager',
  templateUrl: './sale-manager.component.html',
  styleUrls: ['./sale-manager.component.css']
})
export class SaleManagerComponent  {

  @Input() sale: Sale | null = null;
  @Output() edit = new EventEmitter<Sale>();

}

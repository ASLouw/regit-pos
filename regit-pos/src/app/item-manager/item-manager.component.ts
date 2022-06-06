import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './item-manager';

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css']
})
export class ItemManagerComponent {
  @Input() item: Item | null = null;
  @Output() edit = new EventEmitter<Item>();

}

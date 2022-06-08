import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user-manager';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent {
  @Input() user: User | null = null;
  @Output() edit = new EventEmitter<User>();
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Report } from './report-manager';

@Component({
  selector: 'app-report-manager',
  templateUrl: './report-manager.component.html',
  styleUrls: ['./report-manager.component.css']
})
export class ReportManagerComponent {
  @Input() report: Report | null = null;
  @Output() edit = new EventEmitter<Report>();

}

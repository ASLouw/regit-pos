import { Component, Inject, OnInit } from '@angular/core';
import { Report } from '../report-manager/report-manager';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent {
  private backupReport: Partial<Report> = { ...this.data.report };

  constructor(
    public dialogRef: MatDialogRef<ReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReportDialogData
  ) {}

  cancel(): void {
    // this.data.report.name = this.backupReport.name;
    // this.data.report.email = this.backupReport.email;
    // this.data.report.role = this.backupReport.role;
    this.dialogRef.close(this.data);
  }
}

export interface ReportDialogData {
  report: Partial<Report>;
  enableDelete: boolean;
}

export interface ReportDialogDataResult {
  report: Report;
  delete?: boolean;
}
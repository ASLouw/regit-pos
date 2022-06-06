import { Component, Inject, OnInit } from '@angular/core';
import { Sale } from '../sale-manager/sale-manager';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrls: ['./sale-dialog.component.css']
})
export class SaleDialogComponent {
  private backupSale: Partial<Sale> = { ...this.data.sale };

  constructor(
    public dialogRef: MatDialogRef<SaleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SaleDialogData
  ) {}

  cancel(): void {
    // this.data.user.name = this.backupSale.name;
    // this.data.user.email = this.backupSale.email;
    // this.data.user.role = this.backupSale.role;
    this.dialogRef.close(this.data);
  }
}

export interface SaleDialogData {
  sale: Partial<Sale>;
  enableDelete: boolean;
}

export interface SaleDialogDataResult {
  sale: Sale;
  delete?: boolean;
}
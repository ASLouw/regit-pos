import { Component, Inject, OnInit } from '@angular/core';
import { Item } from '../item-manager/item-manager';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent  {
  private backupItem: Partial<Item> = { ...this.data.item };

  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemDialogData
  ) {}

  cancel(): void {
    this.data.item.name = this.backupItem.name;
    this.data.item.price = this.backupItem.price;
    this.dialogRef.close(this.data);
  }
}

export interface ItemDialogData {
  item: Partial<Item>;
  enableDelete: boolean;
}

export interface ItemDialogDataResult {
  item: Item;
  delete?: boolean;
}
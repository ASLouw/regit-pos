import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user-manager/user-manager';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent {
  private backupUser: Partial<User> = { ...this.data.user };

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData
  ) {}

  cancel(): void {
    this.data.user.name = this.backupUser.name;
    this.data.user.email = this.backupUser.email;
    this.data.user.role = this.backupUser.role;
    this.dialogRef.close(this.data);
  }
}

export interface UserDialogData {
  user: Partial<User>;
  enableDelete: boolean;
}

export interface UserDialogDataResult {
  user: User;
  delete?: boolean;
}
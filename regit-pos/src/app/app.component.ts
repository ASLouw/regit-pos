import { Component } from '@angular/core';
import { User } from './user-manager/user-manager';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent, UserDialogDataResult } from './user-dialog/user-dialog.component';
import { AppService } from './app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regit-pos';
  userList: User[] = [
    {
      name: 'Andreas',
      email:'andreas@mail',
      role: 'Cashier'
    },
    {
      name: 'Joe',
      email:'joe@mail',
      role: 'Client'
    }
  ];

  users: any[] = [];

  constructor(private dialog: MatDialog,private appService: AppService) {}

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
        this.userList = users;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  newUser(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '270px',
      data: {
        user: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: UserDialogDataResult|undefined) => {
        if (!result) {
          return;
        }
        this.userList.push(result.user);
        this.appService.addUser(result.user).pipe(takeUntil(this.destroy$)).subscribe(data => {
          console.log('message::::', data);
        });
      });
  }

  editUser( user: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '270px',
      data: {
        user,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: UserDialogDataResult|undefined) => {
      if (!result) {
        return;
      }
      const dataList = this.userList;
      const taskIndex = dataList.indexOf(user);
      if (result.delete) {
        dataList.splice(taskIndex, 1);
      } else {
        dataList[taskIndex] = user;
      }
    });
  }

}

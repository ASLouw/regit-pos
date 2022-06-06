import { Component, OnInit } from '@angular/core';
import { User } from './user-manager/user-manager';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent, UserDialogDataResult } from './user-dialog/user-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Item } from './item-manager/item-manager';
import { ItemDialogComponent, ItemDialogDataResult } from './item-dialog/item-dialog.component';
import { Report } from './report-manager/report-manager';
import { Sale } from './sale-manager/sale-manager';
import { ReportDialogComponent, ReportDialogDataResult } from './report-dialog/report-dialog.component';
import { SaleDialogComponent, SaleDialogDataResult } from './sale-dialog/sale-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'regit-pos';
  userList: User[] = [];

  itemList: Item[] = [];

  reportList: Report[] = [];

  saleList: Sale[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }
  
  constructor(private dialog: MatDialog, private http: HttpClient) {}
  expandedIndex = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  getAllUsers() {
    this.http.post('http://localhost:3000/users/getUsers',{}).subscribe((data: any) => {
      this.userList = JSON.parse(JSON.stringify(data['message'])) as User[]
    });
  }

  getAllItems() {
    this.http.post('http://localhost:3000/users/getItems',{}).subscribe((data: any) => {
      this.itemList = JSON.parse(JSON.stringify(data['message'])) as Item[]
    });
  }

  getAllReports() {
    this.http.post('http://localhost:3000/users/getReports',{}).subscribe((data: any) => {
      this.reportList = JSON.parse(JSON.stringify(data['message'])) as Report[]
    });
  }

  getAllSales() {
    this.http.post('http://localhost:3000/users/getSales',{}).subscribe((data: any) => {
      this.saleList = JSON.parse(JSON.stringify(data['message'])) as Sale[]
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
        this.http.post('http://localhost:3000/users/createUser',{email:result.user.email, name:result.user.name, role:result.user.role}).subscribe((data: any) => {
          console.log(data)
      // this.itemList = JSON.parse(JSON.stringify(data['message'])) as Item[]
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

  newItem(): void {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '270px',
      data: {
        item: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ItemDialogDataResult|undefined) => {
        if (!result) {
          return;
        }
        this.itemList.push(result.item);       
      });
  }

  editItem( item: Item): void {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '270px',
      data: {
        item,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: ItemDialogDataResult|undefined) => {
      if (!result) {
        return;
      }
      const dataList = this.itemList;
      const taskIndex = dataList.indexOf(item);
      if (result.delete) {
        dataList.splice(taskIndex, 1);
      } else {
        dataList[taskIndex] = item;
      }
    });
  }

  newReport(): void {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '270px',
      data: {
        report: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ReportDialogDataResult|undefined) => {
        if (!result) {
          return;
        }
        this.reportList.push(result.report);       
      });
  }

  editReport( report: Report): void {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '270px',
      data: {
        report,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: ReportDialogDataResult|undefined) => {
      if (!result) {
        return;
      }
      const dataList = this.reportList;
      const taskIndex = dataList.indexOf(report);
      if (result.delete) {
        dataList.splice(taskIndex, 1);
      } else {
        dataList[taskIndex] = report;
      }
    });
  }

  newSale(): void {
    const dialogRef = this.dialog.open(SaleDialogComponent, {
      width: '270px',
      data: {
        sale: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: SaleDialogDataResult|undefined) => {
        if (!result) {
          return;
        }
        this.saleList.push(result.sale);       
      });
  }

  editSale( sale: Sale): void {
    const dialogRef = this.dialog.open(SaleDialogComponent, {
      width: '270px',
      data: {
        sale,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: SaleDialogDataResult|undefined) => {
      if (!result) {
        return;
      }
      const dataList = this.saleList;
      const taskIndex = dataList.indexOf(sale);
      if (result.delete) {
        dataList.splice(taskIndex, 1);
      } else {
        dataList[taskIndex] = sale;
      }
    });
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { ItemManagerComponent } from './item-manager/item-manager.component';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';
import { SaleDialogComponent } from './sale-dialog/sale-dialog.component';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';
import { ReportManagerComponent } from './report-manager/report-manager.component';
import { SaleManagerComponent } from './sale-manager/sale-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagerComponent,
    UserDialogComponent,
    ItemManagerComponent,
    ItemDialogComponent,
    SaleDialogComponent,
    ReportDialogComponent,
    ReportManagerComponent,
    SaleManagerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    CdkAccordionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


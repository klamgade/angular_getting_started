import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductsComponent } from './product-module/products/products.component';
import { IndexComponent } from './index/index.component';
import { DataTableComponent } from './data-table/data-table.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSortModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    IndexComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'index', component: IndexComponent },
      { path: 'datatable', component: DataTableComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

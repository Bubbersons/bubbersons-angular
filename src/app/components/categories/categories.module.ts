import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [ CategoriesComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CategoriesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { MainPeopleComponent } from './main-people/main-people.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    MainPeopleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PeopleModule { }

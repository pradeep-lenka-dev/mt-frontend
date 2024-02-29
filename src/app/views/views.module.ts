import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { DashobrdComponent } from './dashobrd/dashobrd.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from '../shared/add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashobrdComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    RouterModule.forChild([]),
     //Routes,
    ViewsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [AddFormComponent]
})
export class ViewsModule { }

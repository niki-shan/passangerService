import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCountComponent } from './pass-count/pass-count.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassDashboardComponent } from './pass-dashboard/pass-dashboard.component';



@NgModule({
  declarations: [
    PassCountComponent,
    PassCardComponent,
    PassDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    PassDashboardComponent
  ]
})
export class PassangerModule { }

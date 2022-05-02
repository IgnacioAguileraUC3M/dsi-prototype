import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar';
import { ClosetComponent } from './closet';
import { MainComponent } from './main';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'closet', component: ClosetComponent, data: {closet:'closet'}},
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

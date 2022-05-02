import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { ShelfComponent } from './shelf/shelf.component';
import { OptionsComponent } from './options/options.component';
import { MainComponent } from './main/main.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ClotheInfoTabComponent } from './clothe-info-tab/clothe-info-tab.component';
import { ClosetComponent } from './closet/closet.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ShelfComponent,
    OptionsComponent,
    MainComponent,
    ClothesComponent,
    ClotheInfoTabComponent,
    ClosetComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

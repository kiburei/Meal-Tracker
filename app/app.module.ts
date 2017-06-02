import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MealTrackerComponent } from './meal-tracker.component';
import { AddMealComponent } from './add-meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MealTrackerComponent,
    AddMealComponent
  ],
  bootstrap: [MealTrackerComponent]
})

export class AppModule { }

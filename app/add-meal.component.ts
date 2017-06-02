import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
    <label>Food Name:</label>
    <input #foodName>
    <label>Food Details:</label>
    <input #foodDetails>
    <label>Food Calories:</label>
    <input #foodCalories>

    <button (click) = "addClicked(foodName.value, foodDetails.value, foodCalories.value)" >New Meal</button>
  `
})

export class AddMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number){
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }

}

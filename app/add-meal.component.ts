import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
  <h3>Add New Meal</h3>
    <input #foodName, placeholder="Meal Name">
    <input #foodDetails, placeholder="Meal Details">
    <input #foodCalories, placeholder="Meal Of Calories">
    <button 
        class="waves-effect waves-light btn"
        (click) = "
        addClicked(foodName.value, foodDetails.value, foodCalories.value);
        foodName.value = '';
        foodDetails.value = '';
        foodCalories.value = '';
        ">New Meal</button>
  `
})

export class AddMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number){
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }

}

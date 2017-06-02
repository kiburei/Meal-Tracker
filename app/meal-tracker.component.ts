import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-tracker',
  template: `
      <h1>Meal Tracker</h1>
      <h2>Today's Meals</h2>
      <div *ngFor="let currentMeal of meals" >
        {{currentMeal.name}}
        {{currentMeal.details}}
        {{currentMeal.calories}}
      </div>
      <add-meal
        (newMealSender) = "addMeal($event)"
      ></add-meal>
  `
})

export class MealTrackerComponent {
  public meals: Meal[] = [
    new Meal("Cassava with salsa","Grilled cassava wedges with salsa", 200),
    new Meal("Chapo Ndondo","FLat bread(EA) with beans", 300),
    new Meal("Chafua","Anything and everything thats left over in a make shift restaurant", 650),
  ];

  addMeal(newMeal: Meal) {
    this.meals.push(newMeal);
  }

}

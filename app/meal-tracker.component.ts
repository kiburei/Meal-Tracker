import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-tracker',
  template: `
      <h1>Meal Tracker</h1>
      <h2>Today's Meals</h2>
      <select (change) = "onChange($event.target.value)" >
        <option value="all">Show All</option>
        <option value="eatMuch">Food is Bae</option>
        <option value="teamWaistLine">I do Yoga</option>
      </select>
      <div *ngFor="let currentMeal of meals | calories:selectedCalories " >
        {{currentMeal.name}}
        {{currentMeal.details}}
        {{currentMeal.calories}} Cal
      </div>
      <add-meal
        (newMealSender) = "addMeal($event)"
      ></add-meal>
      <edit-meal
        [childSelectedMeal] = "selectedMeal"
        (doneClickedSender) = "finishedEditing()"
      ></edit-meal>
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

  public selectedCalories: string = "all";

  onChange(caloriesOption){
    this.selectedCalories = caloriesOption;
    console.log(this.selectedCalories);
  }

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }

}

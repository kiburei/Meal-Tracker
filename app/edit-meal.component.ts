import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h1>Edit Meal</h1>
    <div>
      <label>Food Name:</label>
      <input [(ngModel)]="childSelectedMeal.name">
    </div>
    <div>
      <label>Food Details:</label>
      <input [(ngModel)]="childSelectedMeal.details">
    </div>
    <div>
      <label>Food Calories:</label>
      <input [(ngModel)]="childSelectedMeal.calories">
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }
}

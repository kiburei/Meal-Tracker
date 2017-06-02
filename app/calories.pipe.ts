import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false

})

export class CaloriesPipe implements PipeTransform {
  transform( input: Meal[], diet ) {
    var output: Meal[] = [];
    if(diet === "eatMuch"){
      for ( var i = 0; i < input.length; i++ ){
        if ( input[i].calories >= 500 ) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "teamWaistLine") {
      for ( var i = 0; i < input.length; i++){
        if (input[i].calories < 499){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

 }

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelecte = new EventEmitter<Recipe>();

  recipies: Recipe[] = [
    new Recipe('a test recipies', 
                'This is simply a test', 
                'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
                new Recipe('another test recipies', 
                'This is simply a test number 2', 
                'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')                
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelecte.emit(recipe);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'This is a lasagna recipe',
      'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg'
    ),
    new Recipe(
      'Cake',
      'This is a cake recipe',
      'https://i.ytimg.com/vi/qtlhdIfojmc/maxresdefault.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}

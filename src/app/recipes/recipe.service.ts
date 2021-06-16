import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'This is a lasagna recipe',
      'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Noodles', 5),
        new Ingredient('Tomatoes', 3),
        new Ingredient('Cheese', 4),
      ]
    ),
    new Recipe(
      'Cake',
      'This is a cake recipe',
      'https://i.ytimg.com/vi/qtlhdIfojmc/maxresdefault.jpg',
      [
        new Ingredient('Flour', 3),
        new Ingredient('Sugar', 2),
        new Ingredient('Butter', 1),
        new Ingredient('Eggs', 4),
      ]
    ),
  ];
  //private recipes: Recipe[] = [];

  recipeSelected = new Subject<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

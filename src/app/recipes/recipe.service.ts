import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'This is a lasagna recipe',
      'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Noodles', 5),
        new Ingredient('Tomatoes', 3),
        new Ingredient('Cheese', 4)
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
        new Ingredient('Eggs', 4)
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService){

  }
  getRecipe(index: number){
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    // private ingredientChangedSub: Subscription;
    ingredients: Observable<{ ingredients: Ingredient[] }>;

    constructor(
        private loggingService: LoggingService,
        private store: Store<fromShoppingList.AppState>
    ) {}

    ngOnInit(): void {
        this.ingredients = this.store.select('shoppingList');
        // this.ingredients = this.shoppingListService.getIngredients();
        // this.ingredientChangedSub =
        //   this.shoppingListService.ingredientsChanged.subscribe(
        //     (ingredients: Ingredient[]) => {
        //       this.ingredients = ingredients;
        //     }
        //   );

        this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit()!');
    }

    ngOnDestroy(): void {
        // this.ingredientChangedSub.unsubscribe();
    }

    onEditItem(index: number) {
        // this.shoppingListService.startedEditing.next(index);
        this.store.dispatch(new ShoppingListActions.StartEdit(index));
    }
}

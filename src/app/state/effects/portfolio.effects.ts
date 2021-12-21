import { Injectable } from "@angular/core";
import { createEffect, Actions,  ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import { LoadCategoryAction, LoadCategorySuccessAction, LoadCategoryFailureAction } from "../store/actions/category.action";
import { PortfolioActionType } from "../store/enums/enums";
import { SharedService } from "src/app/shared.service";
import { of } from "rxjs";

@Injectable()
export class PortfolioEffects{
    loadCategories$ = createEffect(() => this.actions$
    .pipe(
        ofType<LoadCategoryAction>(PortfolioActionType.LOAD_CATEGORY),
        mergeMap(
            () => this.service.GetCategories()
            .pipe(
                map(data => new LoadCategorySuccessAction(data)),
                catchError(error => of(new LoadCategoryFailureAction(error)))
            )
        )
    )
    );

    constructor(private actions$:Actions, private service:SharedService){}
}
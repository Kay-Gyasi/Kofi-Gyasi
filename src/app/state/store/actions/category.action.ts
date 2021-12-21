import { Action } from "@ngrx/store";
import { CategoryItems } from "../models/category.models";
import { PortfolioActionType } from "../enums/enums";

export class LoadCategoryAction implements Action {
    readonly type = PortfolioActionType.LOAD_CATEGORY;
}

export class LoadCategorySuccessAction implements Action{
    readonly type = PortfolioActionType.LOAD_CATEGORY_SUCCESS;

    constructor(public payload: CategoryItems[]){}
}

export class LoadCategoryFailureAction implements Action{
    readonly type = PortfolioActionType.LOAD_CATEGORY_FAILURE;

    constructor(private error: Error){}
}

export type CategoryAction = LoadCategoryAction | LoadCategorySuccessAction | LoadCategoryFailureAction;


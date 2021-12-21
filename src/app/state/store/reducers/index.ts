import { CategoryItems } from "../models/category.models";
import { CategoryReducer, DashboardState } from "./category.reducers";
import { ActionReducerMap } from "@ngrx/store";

export const rootReducer = {};

export interface AppState{
    category: DashboardState;
}

export const reducers: ActionReducerMap<any, any> = {
    category: CategoryReducer
}

import { CategoryItems } from "../models/category.models";
import { CategoryReducer, DashboardState } from "./category.reducers";
import { ActionReducerMap } from "@ngrx/store";
import { AboutReducer, AboutState } from "./about.reducer";

export const rootReducer = {};

export interface AppState{
    category: DashboardState;
    about: AboutState;
}

export const reducers: ActionReducerMap<any, any> = {
    category: CategoryReducer,
    about: AboutReducer
}

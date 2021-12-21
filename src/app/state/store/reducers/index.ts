import { CategoryItems } from "../models/category.models";
import { CategoryReducer, DashboardState } from "./category.reducers";
import { ActionReducerMap } from "@ngrx/store";
import { AboutReducer, AboutState } from "./about.reducer";
import { WebReducer, WebState } from "./web.reducer";

export const rootReducer = {};

export interface AppState{
    category: DashboardState;
    about: AboutState;
    web: WebState;
}

export const reducers: ActionReducerMap<any, any> = {
    category: CategoryReducer,
    about: AboutReducer,
    web: WebReducer
}

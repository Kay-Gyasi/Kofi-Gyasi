import { CategoryItems } from "../models/category.models";
import { CategoryAction, LoadCategoryAction } from "../actions/category.action";
import { PortfolioActionType } from "../enums/enums";
import { InitialState } from "@ngrx/store/src/models";

export interface DashboardState{
    list:CategoryItems[],
    loading:boolean,
    error:Error
};

export const initialState = {
    list:[],
    loading:false,
    error:Error()
};

export function CategoryReducer(state:DashboardState = initialState, 
    action: CategoryAction){
        switch (action.type){
            case PortfolioActionType.LOAD_CATEGORY:
                return{
                    ...state,
                    loading: true
                };

            case PortfolioActionType.LOAD_CATEGORY_SUCCESS:
                console.log(action.payload);
                return{
                    ...state,
                    list: action.payload,
                    loading: false
                };

            case PortfolioActionType.LOAD_CATEGORY_FAILURE:
                console.log('Error')
                return{
                    ...state,
                    loading: false,
                    error: Error
                };

            default:
                return state;
        }
    }
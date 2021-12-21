import { WebAction } from "../actions/web.actions";
import { ProjectItems } from "../models/web.model";
import { PortfolioActionType } from "../enums/enums";

export interface WebState{
    list: ProjectItems[],
    loading: Boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: Error()
}

export function WebReducer(state:WebState = initialState, action: WebAction){
    switch(action.type){
        case PortfolioActionType.LOAD_PROJECTS:
            return{
                ...state,
                loading:true
            }
        case PortfolioActionType.LOAD_PROJECTS_SUCCESS:
            return{
                ...state,
                list: action.payload,
                loading: false
            }
        case PortfolioActionType.LOAD_PROJECTS_FAILURE:
            return{
                ...state,
                loading: false,
                error: Error
            }
        default:
            return state;
    }
}
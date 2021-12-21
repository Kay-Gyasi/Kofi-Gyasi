import { AboutAction } from "../actions/about.actions";
import { AboutItems } from "../models/about.model";
import { PortfolioActionType } from "../enums/enums";

export interface AboutState{
    list: AboutItems[],
    loading: boolean,
    error: Error
};

export const initialState = {
    list: [],
    loading: false,
    error: Error()
};

export function AboutReducer(state:AboutState = initialState, action:AboutAction){
    switch(action.type){
        case PortfolioActionType.LOAD_SKILLS:
            return{
                ...state,
                loading: true
            }
        case PortfolioActionType.LOAD_SKILLS_SUCCESS:
            return{
                ...state,
                list: action.payload,
                loading: false
            }
        case PortfolioActionType.LOAD_SKILLS_FAILURE:
            return{
                ...state,
                loading: false,
                error: Error
            }
        default:
            return state;
    }
}
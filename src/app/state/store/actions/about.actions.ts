import { Action } from "@ngrx/store";
import { AboutItems } from "../models/about.model";
import { PortfolioActionType } from "../enums/enums";

export class LoadAboutAction implements Action{
    readonly type = PortfolioActionType.LOAD_SKILLS;
}

export class LoadAboutSuccessAction implements Action{
    readonly type = PortfolioActionType.LOAD_SKILLS_SUCCESS;

    constructor(public payload: AboutItems[]){}
}

export class LoadAboutFailureAction implements Action{
    readonly type = PortfolioActionType.LOAD_SKILLS_FAILURE;

    constructor(public error: Error){}
}

export type AboutAction = LoadAboutAction | LoadAboutSuccessAction | LoadAboutFailureAction;
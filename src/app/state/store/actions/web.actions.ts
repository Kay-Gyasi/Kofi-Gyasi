import { ProjectItems } from "../models/web.model";
import { Action } from "@ngrx/store";
import { PortfolioActionType } from "../enums/enums";

export class LoadWebProjectsAction implements Action{
    readonly type = PortfolioActionType.LOAD_PROJECTS;
}

export class LoadWebSuccessAction implements Action{
    readonly type = PortfolioActionType.LOAD_PROJECTS_SUCCESS;

    constructor(public payload: ProjectItems[]){}
}

export class LoadWebFailureAction implements Action{
    readonly type = PortfolioActionType.LOAD_PROJECTS_FAILURE;

    constructor(public error: Error){}
}

export type WebAction = LoadWebProjectsAction | LoadWebSuccessAction | LoadWebFailureAction;
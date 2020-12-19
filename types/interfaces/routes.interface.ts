import { Routes } from "../type/routes.type";

export interface IRoutes{
    route: Array<{[key in keyof Routes]:string}>
}
import { ApplicationConfig } from "@angular/core"
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router"
import { routes } from "./app.routes"

export const appConfig: ApplicationConfig={
    providers:[provideRouter(routes, withComponentInputBinding(),withRouterConfig({
        paramsInheritanceStrategy:'always'
    }))]  // withComponentInputBinding() tells Angular that we want to have input binding approach enabled
}
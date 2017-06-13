import {Routes,RouterModule} from "@angular/router";
import { LoginComponent} from "./login/login.component";
import { RegistrationComponent} from "./registration/registration.component";
const route:Routes=[
    {
        path:'',redirectTo:'/login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'registration',component:RegistrationComponent
    }
];

export const router=RouterModule.forRoot(route);
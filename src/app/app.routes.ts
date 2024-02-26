import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './Components/articles/articles.component';
import { appConfig } from './app.config';
import { PersonComponent } from './Components/person/person.component';
import { CountryAddComponent } from './Components/country-add/country-add.component';
import { HomeComponent } from './Components/home/home.component';
import { CountryListComponent } from './Components/country-list/country-list.component';
import { CountrySingleComponent } from './Components/country-single/country-single.component';
import { authGuard } from './Authenticate/auth.guard';
import { exampleResolverResolver } from './Resolver/example-resolver.resolver';
enum TheRoutes{
    BASE='',
    ADDRESS="address",
    COUNTRY="country",
    PERSON="person"
}

  export const routes: Routes = [
    { path: TheRoutes.BASE, component: HomeComponent,resolve:{
        userData:exampleResolverResolver,
    }},
    { path: TheRoutes.PERSON, component: PersonComponent },
    { path: TheRoutes.COUNTRY, 
        children:[
            {path:'add',component:CountryAddComponent},
            {path:'list',
            canActivate:[authGuard],
            children:[
                    {path:'',loadComponent:()=>import('./Components/country-list/country-list.component').then((m)=>m.CountryListComponent)},
                    {path:':id',component:CountrySingleComponent}
                ]
            }
        // path list ....
        ]
    },
    // Other routes...
  ];

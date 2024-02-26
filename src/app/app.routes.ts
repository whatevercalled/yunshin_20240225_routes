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
import { CountrySingleEditComponent } from './Components/country-single-edit/country-single-edit.component';
enum TheRoutes{
    BASE='',
    ADDRESS="address",
    COUNTRY="country",
    PERSON="person",
    HOME="home",
}

  export const routes: Routes = [
    { path: TheRoutes.BASE, redirectTo:TheRoutes.HOME,pathMatch:'full'},
    {path:TheRoutes.HOME,component:HomeComponent,resolve:{
        userData:exampleResolverResolver,
    }},
    { path: TheRoutes.PERSON, component: PersonComponent },
    { path: TheRoutes.COUNTRY, 
        children:[
            {path:'add',component:CountryAddComponent},
            {path:'list',
            canActivate:[],
            children:[
                    {path:'',component:CountryListComponent},
                    {path:':id',
                        children:[
                            {path:'',component:CountryListComponent},
                            {path:'edit',component:CountrySingleEditComponent}
                           
                        ]
                    }
                ]
            }
        // path list ....
        ]
    },
    // Other routes...
  ];

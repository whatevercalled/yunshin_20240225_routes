import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-country-single',
  standalone: true,
  imports: [],
  templateUrl: './country-single.component.html',
  styleUrl: './country-single.component.scss'
})
export class CountrySingleComponent {
    id:number|null=null;
    constructor(private activedRoute:ActivatedRoute){
      this.activedRoute.params.subscribe(params=>{
        this.id=params['id'];  
      })
    }
}

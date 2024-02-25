import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-country-single',
  standalone: true,
  imports: [],
  templateUrl: './country-single.component.html',
  styleUrl: './country-single.component.scss'
})
export class CountrySingleComponent {
    @Input('id') singleId='';
}

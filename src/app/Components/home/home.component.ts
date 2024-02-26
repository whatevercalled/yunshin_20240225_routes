import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserState,UserStateJson } from '../../implementation/user-state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userData:UserState
  constructor(private route:ActivatedRoute){
    this.userData=this.route.snapshot.data['userData'];
    // console.log(this.route.snapshot.data['userData']);
    // console.log(this.route.snapshot.data.userData);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor() { }
  getName(){
    return "Ryan Lu";
  }
  getUserId(){
    return "675fd0ba-9afc-4e9e-9d27-bf85abcbb299";
  }
}

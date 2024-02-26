import { ResolveFn } from '@angular/router';
import * as tslib_1 from "tslib";
import { AuthorizeService } from '../Services/authorize.service';
import { UserState, UserStateProperties } from '../implementation/user-state';
class AuthorizeState implements UserState{
  name:string=''
  userId:string=""
  constructor(private AuthorizeService:AuthorizeService){
    this.name=this.AuthorizeService.getName();
    this.userId=this.AuthorizeService.getUserId();
  }
  toJSON(): UserStateProperties {
      return {name:this.name,userId:this.userId};
  }
}
export const exampleResolverResolver: ResolveFn<AuthorizeState> = (route, state) => {
  //find token
  return new AuthorizeState(new AuthorizeService);

};

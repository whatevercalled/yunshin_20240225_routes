import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return false;
  //在此判斷使用者是否有權限可以進入該路由
};

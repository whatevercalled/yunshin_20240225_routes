import { ResolveFn } from '@angular/router';

export const dataResolver: ResolveFn<AllData> = (route, state) => {
  return true;
};

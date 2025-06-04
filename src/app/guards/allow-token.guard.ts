import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const allowTokenGuard: CanActivateFn = (route, state) => {
  let authSer = inject(AuthService);
  if (authSer.estConnecte()) return true;
  return false;
};

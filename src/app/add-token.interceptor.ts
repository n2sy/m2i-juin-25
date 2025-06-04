import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('requete originale', req);
  if (req.method == 'GET') return next(req);

  let token = localStorage.getItem('access_token');
  if (token) {
    let cloneRequest = req.clone({
      headers: new HttpHeaders().append('Authorization', `bearer ${token}`),
    });
    console.log('requete clonee', cloneRequest);

    return next(cloneRequest);
  }

  return next(req);
};

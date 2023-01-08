import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  
  constructor(private authService: AuthService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    // f(this.authService.auth.id){
    //     return true;
    //   }
    
    //   return false;

    return this.authService.verificarUsuario()
            .pipe( 

              tap(usuarioAutentifiaco => {
                
                if(!usuarioAutentifiaco){
                  this.router.navigate(['./auth/login'])
                }
              
              })

              );
              
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | Promise<boolean>  | boolean  {
    
      // if(this.authService.auth.id){
      //   return true;
      // }
    
      // return false;
      return this.authService.verificarUsuario()
              .pipe( 

                tap(usuarioAutentifiaco => {
                  
                  if(!usuarioAutentifiaco){
                    this.router.navigate(['./auth/login'])
                  }
                
                })

                );


  }
}

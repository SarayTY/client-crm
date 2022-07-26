import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appSignOut]'
})
export class SignOutDirective {
  @HostListener('click' , ['$event'])

  clickHandler(e: MouseEvent){
    e.preventDefault();

    this.authService.logout();
  }
  constructor(private authService: AuthService) { }

}

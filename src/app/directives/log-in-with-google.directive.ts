import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLogInWithGoogle]'
})
export class LogInWithGoogleDirective {
  @HostListener('click' , ['$event'])
  clickHandler(e: MouseEvent){
    e.preventDefault();

    this.authService.logInWithGoogle();
  }
  constructor(private authService: AuthService) { }

}
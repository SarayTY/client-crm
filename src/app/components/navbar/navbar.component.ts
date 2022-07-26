import { Component, OnInit } from '@angular/core';
import { User } from '@firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(authService: AuthService) {
    this.user$ = authService.user$;
   }

  ngOnInit(): void {
  }

}

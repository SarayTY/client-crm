import { Injectable } from '@angular/core';
import { Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  User
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$:Observable<User | null>;

  user:User | null = null;
  isLogged: boolean = false;

  constructor(private auth: Auth , private router:Router) {
    this.user$ = authState(this.auth);

    this.user$.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
   }

  createUser(email: string, password: string) {
   return createUserWithEmailAndPassword(this.auth, email, password);
  }

   async loginEmail(email: string, password: string) {
     const user = await signInWithEmailAndPassword(this.auth, email, password);
     this.router.navigate(['/dashboard']);
     return user;
    }

   async logInWithGoogle(){
     return signInWithRedirect(this.auth, new GoogleAuthProvider());
   }

   async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
   }
}

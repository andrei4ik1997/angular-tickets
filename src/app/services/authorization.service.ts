import {Injectable, inject} from '@angular/core';
import {Auth, UserCredential, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {Observable, from} from 'rxjs';

@Injectable()
export class AuthorizationService {
	private readonly angularFireAuth = inject(Auth);

	public login(email: string, password: string): Observable<UserCredential> {
		return from(signInWithEmailAndPassword(this.angularFireAuth, email, password));
	}

	public logout(): Observable<void> {
		return from(signOut(this.angularFireAuth));
	}
}

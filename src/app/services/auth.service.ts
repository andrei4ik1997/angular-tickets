import {Injectable, inject} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly angularFireAuth = inject(AngularFireAuth);
	private readonly router = inject(Router);

	public login(email: string, password: string): void {
		this.angularFireAuth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.router.navigateByUrl('', {replaceUrl: true}).catch(() => {});
			})
			.catch(() => {});
	}

	public get isAuthenticated(): boolean {
		return this.angularFireAuth.currentUser !== null;
	}
}

import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, DestroyRef, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {ToastService} from '@services';
import {AppStore, loadingStatus} from '@shared';
import {authorizationActions} from '@store/authorization/actions';
import {authorizationSelectors} from '@store/authorization/selectors';
import {AuthorizationService} from '../../services/authorization.service';
import {LoginComponent} from './login.component';

@Component({
	selector: 'login-container',
	template: `<login
		[authCredits]="authCredits$ | async"
		[loginLoadingStatus]="loginLoadingStatus()"
		(login)="login($event)"
	/>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [LoginComponent, AsyncPipe],
})
export default class LoginContainer {
	private readonly store = inject<Store<AppStore>>(Store);
	private readonly authorizationService = inject(AuthorizationService);
	private readonly router = inject(Router);
	private readonly destroyRef = inject(DestroyRef);

	protected readonly authCredits$ = this.store.select(authorizationSelectors.authCredits.data);

	protected readonly loginLoadingStatus = signal(loadingStatus.default);

	protected login(event: {email: string; password: string}): void {
		this.authorizationService
			.login(event.email, event.password)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((user) => {
				ToastService.success({
					message: 'You are logged',
				});

				this.loginLoadingStatus.set(loadingStatus.loaded);
				this.store.dispatch(authorizationActions.setAuthCredits({data: {uid: user.user.uid}}));
				this.router.navigateByUrl('').catch(() => {});
			});
	}
}

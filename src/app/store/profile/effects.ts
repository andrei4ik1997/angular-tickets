import {Injectable, inject} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppStore, PageRoute, mapActionsFn} from '@shared';
import {authorizationSelectors} from '@store/authorization/selectors';
import {filter, switchMap, tap, withLatestFrom} from 'rxjs';
import {ToastService} from '../../services/toast.service';
import {profileActions} from './actions';
import {ProfileApiService} from './api/profile.api.service';
import {profileSelectors} from './selectors';

@Injectable()
export class ProfileEffects {
	private readonly store = inject<Store<AppStore>>(Store);
	private readonly actions$ = inject(Actions);
	private readonly profileApiService = inject(ProfileApiService);
	private readonly router = inject(Router);

	private readonly getProfile$ = createEffect(() =>
		this.actions$.pipe(
			ofType(profileActions.getProfile.requested),
			withLatestFrom(this.store.select(authorizationSelectors.authCredits.data)),
			switchMap(([, authCredits]) =>
				this.profileApiService.getProfile(authCredits?.uid ?? '').pipe(mapActionsFn(profileActions.getProfile))
			)
		)
	);

	private readonly getProfileSuccess$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(profileActions.getProfile.succeeded),
				tap((data) => {
					void this.router.navigateByUrl(`${PageRoute.Profile}/${data.payload?.id}`);
				})
			),
		{dispatch: false}
	);

	private readonly changeCity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(profileActions.changeCity.requested),
			withLatestFrom(
				this.store.select(authorizationSelectors.authCredits.data),
				this.store.select(profileSelectors.profile.data)
			),
			filter(([, , profile]) => !!profile),
			switchMap(([action, authCredits, profile]) => {
				const payload = {
					...profile,
					birthday: new Date(profile?.birthday ?? '').getTime(),
					city: action.payload,
				};

				return this.profileApiService
					.changeCity(authCredits?.uid ?? '', payload)
					.pipe(mapActionsFn(profileActions.changeCity as any));
			})
		)
	);

	private readonly changeCitySucceeded$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(profileActions.changeCity.succeeded),
				tap(() => {
					ToastService.success({
						message: 'The city has been successfully changed',
					});
				})
			),
		{
			dispatch: false,
		}
	);

	private readonly changeCityFailed$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(profileActions.changeCity.failed),
				tap(() => {
					ToastService.error({
						message: 'The city has not been changed',
					});
				})
			),
		{
			dispatch: false,
		}
	);
}

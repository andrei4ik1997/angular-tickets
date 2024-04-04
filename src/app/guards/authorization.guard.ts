import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppStore, PageRoute} from '@shared';
import {authorizationSelectors} from '@store/authorization/selectors';
import {map} from 'rxjs';

export const authorizationGuard: CanActivateFn = () => {
	const router = inject(Router);
	const store = inject<Store<AppStore>>(Store);

	const authCredits$ = store.select(authorizationSelectors.authCredits.data);

	return authCredits$.pipe(
		map((authCredits) => {
			if (!authCredits?.uid) {
				router.navigateByUrl(PageRoute.Login).catch(() => {});
			}
			return true;
		})
	);
};

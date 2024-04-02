import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {PageRoute} from '../shared';

export const authorizationGuard: CanActivateFn = () => {
	const router = inject(Router);

	const isAuthorized = true;

	if (isAuthorized) {
		return true;
	}

	return router.navigateByUrl(PageRoute.Login, {replaceUrl: true});
};

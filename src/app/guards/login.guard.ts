import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {PageRoute} from '../shared';

export const loginGuard: CanActivateFn = () => {
	const router = inject(Router);

	const isAuthorized = true;

	if (isAuthorized) {
		return router.navigateByUrl(PageRoute.Tickets, {replaceUrl: true, state: {isFullView: true}});
	}

	return true;
};

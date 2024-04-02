import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {PageRoute} from '../shared';

export const loginGuard: CanActivateFn = async () => {
	const authService = inject(AuthService);
	const router = inject(Router);

	if (authService.isAuthenticated) {
		return router.navigateByUrl(PageRoute.Tickets, {replaceUrl: true, state: {isFullView: true}});
	}

	return true;
};

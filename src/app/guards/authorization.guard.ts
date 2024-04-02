import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {PageRoute} from '../shared';

export const authorizationGuard: CanActivateFn = async () => {
	const authService = inject(AuthService);
	const router = inject(Router);

	if (authService.isAuthenticated) {
		return true;
	}

	return router.navigateByUrl(PageRoute.Login, {replaceUrl: true});
};

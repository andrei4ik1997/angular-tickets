import {ApplicationConfig, inject, isDevMode} from '@angular/core';
import {
	IsActiveMatchOptions,
	Router,
	ViewTransitionsFeatureOptions,
	provideRouter,
	withComponentInputBinding,
	withViewTransitions,
} from '@angular/router';
import {provideServiceWorker} from '@angular/service-worker';
import {MODULE_PROVIDERS, SERVICES} from './app.initializers';
import {APP_ROUTES} from './app.routes';

const viewTransitionConfig: ViewTransitionsFeatureOptions = {
	onViewTransitionCreated: (transitionInfo) => {
		const router = inject(Router);
		const targetUrl = router.getCurrentNavigation()?.finalUrl ?? '';

		const config: IsActiveMatchOptions = {
			paths: 'exact',
			matrixParams: 'exact',
			fragment: 'ignored',
			queryParams: 'ignored',
		};

		// Skip the transition if the only thing changing is the fragment and queryParams
		if (router.isActive(targetUrl, config)) {
			transitionInfo.transition.skipTransition();
		}
	},
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(APP_ROUTES, withComponentInputBinding(), withViewTransitions(viewTransitionConfig)),
		provideServiceWorker('ngsw-worker.js', {
			enabled: !isDevMode(),
			registrationStrategy: 'registerWhenStable:30000',
		}),
		...MODULE_PROVIDERS,
		...SERVICES,
	],
};

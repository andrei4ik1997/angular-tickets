import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, ImportProvidersSource, importProvidersFrom, inject, isDevMode} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {
	IsActiveMatchOptions,
	Router,
	ViewTransitionsFeatureOptions,
	provideRouter,
	withComponentInputBinding,
	withViewTransitions,
} from '@angular/router';
import {provideServiceWorker} from '@angular/service-worker';
import {provideEffects} from '@ngrx/effects';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {firebaseConfig} from '@shared';
import {MODULE_PROVIDERS, SERVICES} from './app.initializers';
import {APP_ROUTES} from './app.routes';
import {storeConfig} from './store';

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

const modules: ImportProvidersSource[] = [
	provideFirebaseApp(() => initializeApp(firebaseConfig)),
	provideAuth(() => getAuth()),
	provideDatabase(() => getDatabase()),
];

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(APP_ROUTES, withComponentInputBinding(), withViewTransitions(viewTransitionConfig)),
		provideAnimationsAsync(),
		provideHttpClient(),
		provideServiceWorker('ngsw-worker.js', {
			enabled: !isDevMode(),
			registrationStrategy: 'registerWhenStable:30000',
		}),
		provideStore(),
		provideEffects([]),
		isDevMode() ? provideStoreDevtools() : [],
		importProvidersFrom(modules),
		...storeConfig.providers,
		...MODULE_PROVIDERS,
		...SERVICES,
	],
};

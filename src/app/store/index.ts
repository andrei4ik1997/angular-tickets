import {ApplicationConfig} from '@angular/core';
import {provideEffects} from '@ngrx/effects';
import {provideState} from '@ngrx/store';
import {AuthorizationEffects} from './authorization/effects';
import {AUTHORIZATION_FEATURE_KEY} from './authorization/entities/constants';
import {authorizationReducer} from './authorization/reducer';
import {ProfileApiService} from './profile/api/profile.api.service';
import {ProfileEffects} from './profile/effects';
import {PROFILE_FEATURE_KEY} from './profile/entities/constants';
import {profileReducer} from './profile/reducer';
import {TicketsApiService} from './tickets/api/tickets.api.service';
import {TicketsEffects} from './tickets/effects';
import {TICKETS_FEATURE_KEY} from './tickets/entities/constants';
import {ticketsReducer} from './tickets/reducer';

export const storeConfig: ApplicationConfig = {
	providers: [
		provideState(AUTHORIZATION_FEATURE_KEY, authorizationReducer),
		provideState(PROFILE_FEATURE_KEY, profileReducer),
		provideState(TICKETS_FEATURE_KEY, ticketsReducer),
		provideEffects([AuthorizationEffects, ProfileEffects, TicketsEffects]),
		TicketsApiService,
		ProfileApiService,
	],
};

import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {TitleStrategy} from '@angular/router';
import {AuthorizationService, CustomTitleStrategyService} from '@services';
import {firebaseConfig} from '@shared';

export const MODULE_PROVIDERS = [
	{
		provide: TitleStrategy,
		useClass: CustomTitleStrategyService,
	},
	{provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
];

export const SERVICES = [AuthorizationService];

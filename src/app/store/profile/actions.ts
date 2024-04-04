import {props} from '@ngrx/store';
import {Profile, getApiActions, getApiActionsWithPayload} from '@shared';
import {PROFILE_FEATURE_KEY} from './entities/constants';

export const profileActions = {
	getProfile: getApiActions(PROFILE_FEATURE_KEY.toUpperCase(), 'Get Profile', props<{payload: Profile | null}>()),
	changeCity: getApiActionsWithPayload(
		PROFILE_FEATURE_KEY.toUpperCase(),
		'Change city',
		props<{payload: string}>(),
		props<{payload: null}>()
	),
};

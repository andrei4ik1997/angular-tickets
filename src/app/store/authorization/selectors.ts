import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AUTHORIZATION_FEATURE_KEY} from './entities/constants';
import {AuthorizationState} from './entities/interfaces';

const getState = createFeatureSelector<AuthorizationState>(AUTHORIZATION_FEATURE_KEY);

const getAuthCreditsData = createSelector(getState, (state) => state.authCredits);

export const authorizationSelectors = {
	authCredits: {
		data: getAuthCreditsData,
	},
};

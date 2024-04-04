import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PROFILE_FEATURE_KEY} from './entities/constants';
import {ProfileState} from './entities/interfaces';

const getState = createFeatureSelector<ProfileState>(PROFILE_FEATURE_KEY);

const getProfile = createSelector(getState, (state) => state.profile);
const getProfileLoadingStatus = createSelector(getState, (state) => state.profileLoadingStatus);

const getChangeCityLoadingStatus = createSelector(getState, (state) => state.changeCityLoadingStatus);

export const profileSelectors = {
	profile: {
		data: getProfile,
		loadingStatus: getProfileLoadingStatus,
		changeCityLoadingStatus: getChangeCityLoadingStatus,
	},
};

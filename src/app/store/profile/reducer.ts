import {Action, createReducer, on} from '@ngrx/store';
import {loadingStatus} from '@shared';
import {profileActions} from './actions';
import {ProfileState} from './entities/interfaces';

const initialState: ProfileState = {
	profile: null,
	profileLoadingStatus: loadingStatus.loading,
	changeCityLoadingStatus: loadingStatus.default,
};

const reducer = createReducer(
	initialState,
	on(profileActions.getProfile.requested, (state) => ({
		...state,
		profileLoadingStatus: loadingStatus.loading,
	})),
	on(profileActions.getProfile.succeeded, (state, action) => ({
		...state,
		profile: action.payload,
		profileLoadingStatus: loadingStatus.loaded,
	})),
	on(profileActions.getProfile.failed, (state) => ({
		...state,
		profile: initialState.profile,
		profileLoadingStatus: loadingStatus.loaded,
	})),
	on(profileActions.changeCity.requested, (state) => ({
		...state,
		changeCityLoadingStatus: loadingStatus.loading,
	})),
	on(profileActions.changeCity.succeeded, (state) => ({
		...state,
		changeCityLoadingStatus: loadingStatus.loaded,
	})),
	on(profileActions.changeCity.failed, (state) => ({
		...state,
		changeCityLoadingStatus: loadingStatus.loaded,
	}))
);

export function profileReducer(state: ProfileState | undefined, action: Action): ProfileState {
	return reducer(state, action);
}

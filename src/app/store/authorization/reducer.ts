import {Action, createReducer, on} from '@ngrx/store';
import {authorizationActions} from './actions';
import {AuthorizationState} from './entities/interfaces';

const initialState: AuthorizationState = {
	authCredits: null,
};

const reducer = createReducer(
	initialState,
	on(authorizationActions.setAuthCredits, (state, action) => ({
		...state,
		authCredits: action.data,
	}))
);

export function authorizationReducer(state: AuthorizationState | undefined, action: Action): AuthorizationState {
	return reducer(state, action);
}

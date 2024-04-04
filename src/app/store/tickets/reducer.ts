import {Action, createReducer, on} from '@ngrx/store';
import {loadingStatus} from '@shared';
import {ticketsActions} from './actions';
import {TicketsState} from './entities/interfaces';

const initialState: TicketsState = {
	tickets: [],
	ticketsLoadingStatus: loadingStatus.loading,
};

const reducer = createReducer(
	initialState,
	on(ticketsActions.getTickets.requested, (state) => ({
		...state,
		tickets: initialState.tickets,
		ticketsLoadingStatus: loadingStatus.loading,
	})),
	on(ticketsActions.getTickets.succeeded, (state, action) => ({
		...state,
		tickets: action.payload,
		ticketsLoadingStatus: loadingStatus.loaded,
	})),
	on(ticketsActions.getTickets.failed, (state) => ({
		...state,
		tickets: initialState.tickets,
		ticketsLoadingStatus: loadingStatus.loaded,
	}))
);

export function ticketsReducer(state: TicketsState | undefined, action: Action): TicketsState {
	return reducer(state, action);
}

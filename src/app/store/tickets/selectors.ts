import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TICKETS_FEATURE_KEY} from './entities/constants';
import {TicketsState} from './entities/interfaces';

const getState = createFeatureSelector<TicketsState>(TICKETS_FEATURE_KEY);

const getTickets = createSelector(getState, (state) => state.tickets);
const getTicketsLoadingStatus = createSelector(getState, (state) => state.ticketsLoadingStatus);

export const ticketsSelectors = {
	tickets: {
		data: getTickets,
		loadingStatus: getTicketsLoadingStatus,
	},
};

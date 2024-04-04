import {props} from '@ngrx/store';
import {Ticket, getApiActions} from '@shared';
import {TICKETS_FEATURE_KEY} from './entities/constants';

export const ticketsActions = {
	getTickets: getApiActions(TICKETS_FEATURE_KEY.toUpperCase(), 'Get Tickets', props<{payload: Ticket[]}>()),
};

import {LoadingStatus, Ticket} from '@shared';

export interface TicketsState {
	tickets: Ticket[];
	ticketsLoadingStatus: LoadingStatus;
}

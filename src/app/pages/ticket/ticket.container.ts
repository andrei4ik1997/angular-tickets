import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, input, numberAttribute} from '@angular/core';
import {Store} from '@ngrx/store';
import {ticketsSelectors} from '@store/tickets/selectors';
import {AppStore} from '../../shared/interfaces';
import {TicketComponent} from './ticket.component';

@Component({
	selector: 'ticket-container',
	template: '<ticket  [ticketID]="ticketID()" [tickets]="(tickets$ | async)!"/>',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TicketComponent, AsyncPipe],
})
export default class TicketContainer {
	private readonly store = inject<Store<AppStore>>(Store);

	public readonly ticketID = input(0, {transform: numberAttribute});

	protected readonly tickets$ = this.store.select(ticketsSelectors.tickets.data);
}

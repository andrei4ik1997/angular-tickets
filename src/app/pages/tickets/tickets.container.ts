import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit, inject, input} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '@shared';
import {ticketsActions} from '@store/tickets/actions';
import {ticketsSelectors} from '@store/tickets/selectors';
import {TicketsComponent} from './tickets.component';

@Component({
	selector: 'tickets-container',
	template: `<tickets
		[isFullView]="isFullView()"
		[tickets]="(tickets$ | async)!"
		[ticketsLoadingStatus]="(ticketsLoadingStatus$ | async)!"
	/>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TicketsComponent, AsyncPipe],
})
export default class TicketsContainer implements OnInit {
	public readonly isFullView = input(false);

	private readonly store = inject<Store<AppStore>>(Store);

	protected readonly tickets$ = this.store.select(ticketsSelectors.tickets.data);
	protected readonly ticketsLoadingStatus$ = this.store.select(ticketsSelectors.tickets.loadingStatus);

	ngOnInit(): void {
		this.store.dispatch(ticketsActions.getTickets.requested());
	}
}

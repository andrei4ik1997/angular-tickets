import {Injectable, inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {mapActionsFn} from '@shared';
import {switchMap} from 'rxjs';
import {ticketsActions} from './actions';
import {TicketsApiService} from './api/tickets.api.service';

@Injectable()
export class TicketsEffects {
	private readonly actions$ = inject(Actions);
	private readonly ticketsApiService = inject(TicketsApiService);

	private readonly getTickets$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ticketsActions.getTickets.requested),
			switchMap(() => this.ticketsApiService.getTickets().pipe(mapActionsFn(ticketsActions.getTickets)))
		)
	);
}

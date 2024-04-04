import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppStore, PageRoute} from '@shared';
import {ticketsSelectors} from '@store/tickets/selectors';
import {map} from 'rxjs';

export const ticketGuard: CanActivateFn = (route, state) => {
	const store = inject<Store<AppStore>>(Store);
	const router = inject(Router);

	const tickets$ = store.select(ticketsSelectors.tickets.data);

	if (state.url === `/${PageRoute.Ticket}`) {
		return router.navigateByUrl(PageRoute.Tickets);
	}
	return tickets$.pipe(
		map((tickets) => {
			if (!tickets.length) {
				router.navigateByUrl(PageRoute.Tickets).catch(() => {});
			}
			return true;
		})
	);
};

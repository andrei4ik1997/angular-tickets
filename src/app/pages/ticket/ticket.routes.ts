import {Routes} from '@angular/router';

const ticketRoutes: Routes = [
	{
		path: ':ticketID',
		loadComponent: () => import('./ticket.container'),
		data: {
			breadcrumb: (ticketID: string): string => `Ticket ${ticketID}`,
		},
	},
];

export default ticketRoutes;

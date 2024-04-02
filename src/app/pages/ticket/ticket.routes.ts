import {Routes} from '@angular/router';

const ticketRoutes: Routes = [
	{
		path: ':ticketID',
		loadComponent: () => import('./ticket.container'),
	},
];

export default ticketRoutes;

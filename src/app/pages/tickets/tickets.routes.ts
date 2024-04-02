import {Routes} from '@angular/router';

const ticketsRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./tickets.container'),
	},
];

export default ticketsRoutes;

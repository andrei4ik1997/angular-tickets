import {Routes} from '@angular/router';
import {authorizationGuard} from './guards';
import {PageRoute} from './shared';

export const APP_ROUTES: Routes = [
	{
		path: '',
		canActivateChild: [authorizationGuard],
		children: [
			{
				path: '',
				redirectTo: PageRoute.Tickets,
				pathMatch: 'full',
				data: {
					isFullView: true,
				},
			},
			{path: PageRoute.Profile, loadChildren: () => import('./pages/profile/profile.routes'), title: 'Profile'},
			{path: PageRoute.Ticket, loadChildren: () => import('./pages/ticket/ticket.routes'), title: 'Ticket'},
			{path: PageRoute.Tickets, loadChildren: () => import('./pages/tickets/tickets.routes'), title: 'Tickets'},
			{
				path: PageRoute.NotFound,
				loadChildren: () => import('./pages/not-found/not-found.routes'),
				title: 'Not Found',
			},
		],
	},
	{
		path: PageRoute.Login,
		canActivateChild: [],
		loadChildren: () => import('./pages/login/login.routes'),
		title: 'Login',
	},
	{
		path: '**',
		redirectTo: PageRoute.NotFound,
		pathMatch: 'full',
	},
];

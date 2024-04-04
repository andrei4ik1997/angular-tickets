import {Routes} from '@angular/router';
import {authorizationGuard, ticketGuard} from '@guards';
import {PageRoute} from '@shared';

export const APP_ROUTES: Routes = [
	{
		path: '',
		canActivateChild: [authorizationGuard],
		children: [
			{
				path: '',
				loadChildren: () => import('./pages/tickets/tickets.routes'),
				data: {
					isFullView: true,
				},
			},
			{
				path: PageRoute.Profile,
				loadChildren: () => import('./pages/profile/profile.routes'),
				title: 'Profile',
				data: {
					breadcrumb: {
						label: 'Profile',
						routeInterceptor: (): string => '',
					},
				},
			},
			{
				path: `${PageRoute.Ticket}`,
				loadChildren: () => import('./pages/ticket/ticket.routes'),
				title: 'Ticket',
				data: {
					breadcrumb: {
						label: 'Ticket',
						routeInterceptor: (): string => PageRoute.Tickets,
					},
				},
				canActivate: [ticketGuard],
			},
			{
				path: PageRoute.Tickets,
				loadChildren: () => import('./pages/tickets/tickets.routes'),
				title: 'Tickets',
				data: {breadcrumb: 'Tickets'},
			},
			{
				path: PageRoute.NotFound,
				loadChildren: () => import('./pages/not-found/not-found.routes'),
				title: 'Not Found',
				data: {breadcrumb: 'Not Found'},
			},
		],
		data: {
			breadcrumb: {
				label: 'Main',
				info: {icon: 'home'},
			},
		},
	},
	{
		path: PageRoute.Login,
		canActivateChild: [],
		loadChildren: () => import('./pages/login/login.routes'),
		title: 'Login',
		data: {breadcrumb: 'Login'},
	},
	{
		path: '**',
		redirectTo: PageRoute.NotFound,
		pathMatch: 'full',
	},
];

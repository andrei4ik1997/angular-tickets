import {Routes} from '@angular/router';

const profileRoutes: Routes = [
	{
		path: ':userID',
		loadComponent: () => import('./profile.container'),
		data: {
			breadcrumb: (userID: string): string => `User ${userID}`,
		},
	},
];

export default profileRoutes;

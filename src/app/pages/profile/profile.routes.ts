import {Routes} from '@angular/router';

const profileRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./components/profile-wrapper/profile-wrapper.container'),
		children: [
			{
				path: ':userID',
				loadComponent: () => import('./components/profile/profile.container'),
				data: {
					breadcrumb: (userID: string): string => `User ${userID}`,
				},
			},
		],
	},
];

export default profileRoutes;

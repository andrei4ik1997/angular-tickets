import {Routes} from '@angular/router';

const profileRoutes: Routes = [
	{
		path: ':userID',
		loadComponent: () => import('./profile.container'),
	},
];

export default profileRoutes;

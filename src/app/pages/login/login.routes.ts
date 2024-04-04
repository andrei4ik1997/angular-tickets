import {Routes} from '@angular/router';

const loginRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./login.container'),
	},
];

export default loginRoutes;

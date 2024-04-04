import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppStore, BreadcrumbsComponent, PageRoute, ToolbarComponent} from '@shared';
import {authorizationActions} from '@store/authorization/actions';
import {AuthorizationService} from './services/authorization.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, BreadcrumbsComponent, ToolbarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	private readonly store = inject<Store<AppStore>>(Store);
	private readonly router = inject(Router);
	private readonly authorizationService = inject(AuthorizationService);

	protected get isLoginPage(): boolean {
		return this.router.url !== `/${PageRoute.Login as string}`;
	}

	protected logOut(): void {
		this.authorizationService.logout().subscribe(() => {
			this.store.dispatch(authorizationActions.setAuthCredits({data: null}));
			void this.router.navigateByUrl(PageRoute.Login);
		});
	}
}

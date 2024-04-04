import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AuthorizationService} from '../../../services/authorization.service';
import {PageRoute} from '../../enums';

@Component({
	selector: 'toolbar',
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive],
})
export class ToolbarComponent {
	protected readonly authorizationService = inject(AuthorizationService);

	protected readonly logOut = output<void>();

	protected readonly pageRoute = PageRoute;
}

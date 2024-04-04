import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'not-found',
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [],
})
export class NotFoundComponent {}

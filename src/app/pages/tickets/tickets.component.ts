import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'tickets',
	templateUrl: './tickets.component.html',
	styleUrl: './tickets.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [],
})
export class TicketsComponent {}

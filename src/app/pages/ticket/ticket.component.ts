import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'ticket',
	templateUrl: './ticket.component.html',
	styleUrl: './ticket.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [],
})
export class TicketComponent {}

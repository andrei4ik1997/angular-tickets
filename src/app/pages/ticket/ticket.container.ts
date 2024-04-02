import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TicketComponent} from './ticket.component';

@Component({
	selector: 'ticket-container',
	template: '<ticket />',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TicketComponent],
})
export default class TicketContainer {}

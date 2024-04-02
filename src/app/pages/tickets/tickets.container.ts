import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TicketsComponent} from './tickets.component';

@Component({
	selector: 'tickets-container',
	template: '<tickets />',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TicketsComponent],
})
export default class TicketsContainer {}

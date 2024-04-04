import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Ticket} from '../../shared/interfaces';

@Component({
	selector: 'ticket',
	templateUrl: './ticket.component.html',
	styleUrl: './ticket.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [MatCardModule],
})
export class TicketComponent {
	public readonly ticketID = input.required();
	public readonly tickets = input.required<Ticket[]>();

	protected readonly ticket = computed(() => this.tickets().find((ticket) => ticket.id === this.ticketID()));
}

import {animate, state, style, transition, trigger} from '@angular/animations';
import {ChangeDetectionStrategy, Component, computed, inject, input, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Router} from '@angular/router';
import {NoDataComponent, SpinnerComponent} from '../../shared/components';
import {PageRoute} from '../../shared/enums';
import {LoadingStatus, Ticket} from '../../shared/interfaces';
import {columnTitle, displayedColumns} from './entities/tickets.constants';

@Component({
	selector: 'tickets',
	templateUrl: './tickets.component.html',
	styleUrl: './tickets.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	animations: [
		trigger('detailExpand', [
			state('collapsed,void', style({height: '0px', minHeight: '0'})),
			state('expanded', style({height: '*'})),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
	imports: [MatTableModule, MatSortModule, MatButtonModule, MatIconModule, SpinnerComponent, NoDataComponent],
})
export class TicketsComponent {
	private readonly router = inject(Router);

	public readonly isFullView = input.required<boolean>();
	public readonly tickets = input.required<Ticket[]>();
	public readonly ticketsLoadingStatus = input.required<LoadingStatus>();

	protected readonly sortedTickets = computed(() => {
		const dataSource = new MatTableDataSource(this.tickets() ?? []);
		dataSource.sort = this.matSort() ?? null;
		return dataSource;
	});

	private readonly matSort = viewChild(MatSort);

	protected readonly columns = displayedColumns;
	protected readonly columnTitle = columnTitle;

	protected readonly columnsWithExpand = computed(() => {
		if (this.isFullView()) {
			return [...this.columns, 'expand'];
		}
		return [...this.columns];
	});
	protected expandedTicket: Ticket | null | undefined;

	protected changeExpandedElement(event: MouseEvent, element: Ticket): void {
		event.stopPropagation();
		this.expandedTicket = this.expandedTicket === element ? null : element;
	}

	protected openTicket(event: MouseEvent, element: Ticket): void {
		event.preventDefault();

		this.router.navigateByUrl(`${PageRoute.Ticket}/${element.id}`).catch(() => {});
	}
}

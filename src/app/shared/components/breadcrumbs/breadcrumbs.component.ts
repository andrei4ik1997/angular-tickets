import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {BreadcrumbComponent, BreadcrumbItemDirective} from 'xng-breadcrumb';

@Component({
	selector: 'breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrl: './breadcrumbs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [BreadcrumbComponent, BreadcrumbItemDirective, MatIconModule],
})
export class BreadcrumbsComponent {}

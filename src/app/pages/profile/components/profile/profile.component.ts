import {NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {LoadingStatus, NoDataComponent, Profile} from '@shared';
import {CITIES} from './entities/profile.constants';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [MatCardModule, NoDataComponent, FormsModule, MatSelectModule, NgFor],
})
export class ProfileComponent {
	public readonly profile = input.required<Profile | null>();
	public readonly changeCityLoadingStatus = input.required<LoadingStatus>();

	protected readonly cityChanged = output<string>();

	protected readonly cities = CITIES;

	protected changeCity(event: Event): void {
		event.preventDefault();
		const target = event.target as HTMLSelectElement;
		this.cityChanged.emit(target.value);
	}
}

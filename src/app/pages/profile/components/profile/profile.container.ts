import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '@shared';
import {profileActions} from '@store/profile/actions';
import {profileSelectors} from '@store/profile/selectors';
import {ProfileComponent} from './profile.component';

@Component({
	selector: 'profile-container',
	template: `<profile
		[profile]="(profile$ | async)!"
		[changeCityLoadingStatus]="(changeCityLoadingStatus$ | async)!"
		(cityChanged)="cityChanged($event)"
	/>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [AsyncPipe, ProfileComponent],
})
export default class ProfileContainer implements OnInit {
	private readonly store = inject<Store<AppStore>>(Store);

	protected readonly profile$ = this.store.select(profileSelectors.profile.data);
	protected readonly changeCityLoadingStatus$ = this.store.select(profileSelectors.profile.changeCityLoadingStatus);

	ngOnInit(): void {
		this.store.dispatch(profileActions.getProfile.requested());
	}

	protected cityChanged(city: string): void {
		this.store.dispatch(profileActions.changeCity.requested({payload: city}));
	}
}

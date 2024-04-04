import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '@shared';
import {profileActions} from '@store/profile/actions';
import {profileSelectors} from '@store/profile/selectors';
import {ProfileWrapperComponent} from './profile-wrapper.component';

@Component({
	selector: 'profile-wrapper-container',
	template: '<profile-wrapper [profileLoadingStatus]="(profileLoadingStatus$|async)!"/>',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [AsyncPipe, ProfileWrapperComponent],
})
export default class ProfileWrapperContainer implements OnInit {
	private readonly store = inject<Store<AppStore>>(Store);

	protected readonly profileLoadingStatus$ = this.store.select(profileSelectors.profile.loadingStatus);

	ngOnInit(): void {
		this.store.dispatch(profileActions.getProfile.requested());
	}
}

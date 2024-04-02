import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProfileComponent} from './profile.component';

@Component({
	selector: 'profile-container',
	template: '<profile />',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [ProfileComponent],
})
export default class ProfileContainer {}

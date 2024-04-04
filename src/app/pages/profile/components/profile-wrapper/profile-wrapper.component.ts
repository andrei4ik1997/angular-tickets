import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoadingStatus, SpinnerComponent} from '@shared';

@Component({
	selector: 'profile-wrapper',
	templateUrl: './profile-wrapper.component.html',
	styleUrl: './profile-wrapper.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterOutlet, SpinnerComponent],
})
export class ProfileWrapperComponent {
	public readonly profileLoadingStatus = input.required<LoadingStatus>();
}

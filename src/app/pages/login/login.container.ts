import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoginComponent} from './login.component';

@Component({
	selector: 'login-container',
	template: '<login />',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [LoginComponent],
})
export default class LoginContainer {}

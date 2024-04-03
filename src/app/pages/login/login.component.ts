import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class LoginComponent {
	private readonly fb = inject(FormBuilder);
	private readonly authService = inject(AuthService);

	protected readonly form = this.fb.nonNullable.group({
		email: ['admin@admin.com', Validators.required],
		password: ['adminadmin', Validators.required],
	});

	protected passwordVisibility = true;
	protected errorMessage: string | null = null;

	protected changePasswordVisibility(): void {
		this.passwordVisibility = !this.passwordVisibility;
	}

	protected onSubmit(): void {
		this.errorMessage = null;

		this.authService.login(this.form.controls.email.value, this.form.controls.password.value);
	}
}

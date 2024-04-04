import {ChangeDetectionStrategy, Component, effect, inject, input, output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {Router} from '@angular/router';
import {LoadingStatus} from '@shared';
import {DEFAULT_LOGIN, DEFAULT_PASSWORD} from './entities/login.entities';

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
	private readonly router = inject(Router);

	public readonly authCredits = input.required<{
		uid: string;
	} | null>();
	public readonly loginLoadingStatus = input.required<LoadingStatus>();

	protected readonly login = output<{email: string; password: string}>();

	protected readonly form = this.fb.nonNullable.group({
		email: [DEFAULT_LOGIN, Validators.required],
		password: [DEFAULT_PASSWORD, Validators.required],
	});

	protected passwordVisibility = true;

	constructor() {
		effect(() => {
			if (this.authCredits()?.uid) {
				this.router.navigateByUrl('').catch(() => {});
			}
		});
	}

	protected changePasswordVisibility(): void {
		this.passwordVisibility = !this.passwordVisibility;
	}

	protected onSubmit(): void {
		this.login.emit({email: this.form.controls.email.value, password: this.form.controls.password.value});
	}
}

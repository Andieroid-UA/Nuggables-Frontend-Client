import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule, FormsModule],
	templateUrl: './login.component.html',
	styleUrl: '../auth.shared.scss',
})
export class LoginComponent {
	username: string = '';
	password: string = '';

	constructor(private authService: AuthenticationService, private router: Router) {}

	login() {
		this.authService.login(this.username, this.password).subscribe({
			next: (res: any) => {
				console.log('Logged in with token:', res.token);
				this.authService.setToken(res.token);
				this.router.navigate(['/main']);
			},
			error: (error: any) => {
        console.log('the error is here');
				console.error('Login error', error);
			},
		});
	}
}

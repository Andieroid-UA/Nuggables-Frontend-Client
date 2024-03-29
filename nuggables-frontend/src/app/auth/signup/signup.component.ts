import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: '../auth.shared.scss'
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  })

  errors:string[] = []

  constructor(private authService: AuthenticationService,
    private router:Router) { }

  onSignup() {
    const formValue = this.signupForm.value
    this.authService.signup(formValue).subscribe({
      next: (res:any)=>{
        this.router.navigate(['/login'])
      },
      error: (error:any)=>{
        console.error(error)
        this.errors = error.error
      }
    })
  }
}

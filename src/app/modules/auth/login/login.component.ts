import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup = this.fb.group({
        email: ['', [(Validators.required, Validators.email)]],
        password: ['', [(Validators.required, Validators.minLength(6))]],
    });
    loginError: boolean = false;
    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    login = () => {
        const { email, password } = this.loginForm.value;
        this.authService.login(email, password).subscribe((auth) => {
            if (auth) {
                this.router.navigateByUrl('/home');
            } else {
                this.loginError = true;
            }
        });
    };
}

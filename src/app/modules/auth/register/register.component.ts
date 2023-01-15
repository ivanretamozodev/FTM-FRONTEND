import { catchError } from "rxjs";
import { AuthService } from "./../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  registerForm: FormGroup = this.fb.group({
    name: ["magui", [Validators.required]],
    email: ["magui@test.com", [(Validators.required, Validators.email)]],
    password: ["123456", [(Validators.required, Validators.minLength(6))]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  registerError: boolean = false;

  register = () => {
    const { email, password, name } = this.registerForm.value;
    this.authService.register(email, password, name).subscribe((auth) => {
      if (auth) {
        this.router.navigateByUrl("/home");
      } else {
        this.registerError = true;
      }
    });
  };
}

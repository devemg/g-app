import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  verificationForm: FormGroup;
  showVerification = false;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      cui: ['', [Validators.required, Validators.minLength(13), Validators.pattern('[0-9]+')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.verificationForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get loginControls() {
    return this.loginForm.controls;
  }

  get verificationControls() {
    return this.verificationForm.controls
  }

  manageLogin() {
    if (this.loginForm.valid) {
      const { cui, password } = this.loginForm.value;
      this.authService.login(cui, password).then(()=> {
        this.showVerification = true;
      })
      .catch((e)=> {
        console.log(e);
      });
    }
  }

  manageVerification() {
    if (this.verificationForm.valid) {
      const { code } = this.verificationForm.value;
      this.authService.verify(code).then(()=> {
        localStorage.setItem('userLogged', 'true');
        this.router.navigate(['/home']);
      })
      .catch((e)=> {
        console.log(e);
      });
    }
  }

  verifyWithFP() {
    console.info('[INFO] TODO: Verify with biometrics');
  }
}

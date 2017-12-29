import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
  registrationForm;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  doSignUp(): void {
    const data = this.registrationForm.value;
    console.log( data );
  }

  isEmailValid(): boolean {
    let res = true;
    if ( this.registrationForm.get('email').touched ) {
      res = this.registrationForm.controls.email.valid;
    }
    return res;
  }

  isPasswordValid(): boolean {
    let res = true;
    if ( this.registrationForm.get('password').touched ) {
      res = this.registrationForm.controls.password.valid;
    }
    return res;
  }

  isRepeatPasswordValid(): boolean {
    let res = true;
    if ( this.registrationForm.get('repeatPassword').touched ) {
      res = this.registrationForm.controls.repeatPassword.valid &&
            this.registrationForm.controls.repeatPassword.value === this.registrationForm.controls.password.value;
    }
    return res;
  }

  isFormValid(): boolean {
    const res = this.isEmailValid() && this.isPasswordValid() && this.isRepeatPasswordValid() && this.registrationForm.valid;
    return res;
  }

}

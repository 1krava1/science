import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.createSignInForm();
  }

  createSignInForm(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  doSignIn(): void {
    const data = this.signInForm.value;
    this.userService.signIn( data ).subscribe( (response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  isEmailValid(): boolean {
    let res = true;
    if ( this.signInForm.get('email').touched ) {
      res = this.signInForm.controls.email.valid;
    }
    return res;
  }

  isPasswordValid(): boolean {
    let res = true;
    if ( this.signInForm.get('password').touched ) {
      res = this.signInForm.controls.password.valid;
    }
    return res;
  }

  isFormValid(): boolean {
    const res = this.isEmailValid() && this.isPasswordValid() &&  this.signInForm.valid;
    return res;
  }

}

import { Component } from '@angular/core';
import { OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, exhaustMap, map, catchError } from 'rxjs/operators';
export interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}
export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private EMAIL_REGEX: RegExp =
    /^ *([A-Za-z]|\d|[_%+-])+(\.([A-Za-z]|\d|[_%+-])+)*@([A-Za-z]|\d|[-])+(\.([A-Za-z]|\d|[-])+)*(\.[A-Za-z]{2,4}) *$/;
  loginForm: FormGroup;

  @Output() submitted = new EventEmitter<ILogin>();

  @Input() public pending: boolean;

  @Input() public token: string;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.createForm();
    this.token = null;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEX)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      remember: true
    });
  }

  ngOnInit() { }

  onSubmit() {
    this.http
      .post<any>('http://auth.demo-app.com:32703/api/accounts/login', {
        userName: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value
      }).subscribe(result => {
        const data = {
          username: this.loginForm.controls['username'].value,
          token: result.auth_token,
          id: result.id,
          expires_in: result.expires_in,
          password: this.loginForm.controls['username'].value
        };
        this.token = JSON.stringify(data);
        this.loginForm.markAsPristine();
      }, error => console.error(error));
  }
}

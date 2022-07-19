import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { catchError, map } from 'rxjs';
import { Store } from '@ngrx/store';

import * as UserActions from '../../store/actions/user.actions';
import { TokenModel } from 'src/app/interfaces/token-model';
import { AxiosResponse } from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = new FormControl('', [Validators.required, Validators.email]);

  public hide = true;

  public password = new FormControl('', [Validators.required]);

  constructor(private apiService: ApiService, private store: Store, private router: Router) { }

  public ngOnInit(): void {
  }

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public logIn(): void {
    // this.store.dispatch(UserActions.LoginUser({
    //   email: this.email.value as string,
    //   password: this.password.value as string
    // }))

    this.apiService.signIn$(
      this.email.value as string,
      this.password.value as string
    ).then((data) => {
      this.store.dispatch(UserActions.LoginUserSuccess(
        {
          user: {
            email: this.email.value as string,
            password: this.password.value as string,
            token: ((data as AxiosResponse).data).access_token,
          }
        }
      ))
      this.router.navigate(['/']);
    })

      // this.store.dispatch(UserActions.LoginUserSuccess(
      //   {
      //     user: {
      //       email: this.email.value as string,
      //       password: this.password.value as string,
      //       token: 'eewbwbwew',
      //     }
      //   }
      // ))
  };
};


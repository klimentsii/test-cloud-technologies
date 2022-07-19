import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from '../actions/user.actions';
import { catchError, map, of, switchMap } from "rxjs";
import { UserModel } from "src/app/interfaces/user-model";
import { ApiService } from "src/app/services/api.service";
import { TokenModel } from "src/app/interfaces/token-model";
import { Store } from "@ngrx/store";
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private apiService: ApiService, private store: Store, private router: Router) {}

  // loginUser = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(UserActions.LoginUser),
  //       switchMap(({ email, password }) => {
  //         return this.apiService.signIn$(email, password).then(
  //           // map((token: TokenModel ) => {
  //           //   const user: UserModel = { email: email, password: password, token: token.access_token };
  //           //   this.router.navigate(['/']);

  //           //   return token ? UserActions.LoginUserSuccess({ user: user }) : UserActions.LoginUserFailed;
  //           // }),
  //           // catchError(() => of(UserActions.LoginUserFailed))
  //         );
  //       }
  //     ));
  //   });
};

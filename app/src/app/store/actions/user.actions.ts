import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/interfaces/user-model';

export const LoginUser = createAction(
  '[USER] Login User',
  props<{ email: string, password: string }>(),
);

export const LoginUserSuccess = createAction(
  '[USER] Login User Success',
  props<{ user: UserModel }>(),
);

export const LoginUserFailed = createAction(
  '[USER] Login User Failed'
);

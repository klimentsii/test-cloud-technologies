import { ActionReducerMap, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UserModel } from 'src/app/interfaces/user-model';
import * as UserActions from '../actions/user.actions';

export interface State {}

export const initialState: UserState = {
  user: {
    email: '',
    password: '',
    token: '',
  }
};

export interface UserState {
  user: UserModel;
}

export const reducer = createReducer(
  initialState,
  on(UserActions.LoginUserSuccess, (state, { user }): UserState => {
    return { user }
  }),
  on(UserActions.LoginUserFailed, (state): UserState => state),
);

export const selectUserStore = createFeatureSelector<UserState>('auth');

export const getCurrentUser = createSelector(selectUserStore, (state: UserState) => {
  return state.user;
});

export const reducers: ActionReducerMap<State> = {
  auth: reducer,
};

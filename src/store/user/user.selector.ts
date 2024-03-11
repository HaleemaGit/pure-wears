import { createSelector } from 'reselect';
import RootState from '../store';
import { UserState } from './user.reducer';
import { userReducer } from './user.reducer';


// export const selectUserReducer = (state: typeof RootState): UserState => state.user;
const selectUserReducer = (state: { user: UserState }): UserState =>
  state.user;
export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

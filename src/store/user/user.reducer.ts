// // import { createSlice, createAsyncThunk, PayloadAction, Slice } from '@reduxjs/toolkit';
// // import { UserData } from '../../utils/firebase/firebase/firebase.utils';

// // // Export the UserState type
// // export interface UserState {
// //   currentUser: UserData | null;
// //   isLoading: boolean;
// //   error: Error | null;
// // }

// // const initialState: UserState = {
// //   currentUser: null,
// //   isLoading: false,
// //   error: null,
// // };

// // const userSlice: Slice<UserState, {
// //   signInSuccess: (state: UserState, action: PayloadAction<UserData & { id: string }>) => void;
// //   signOutSuccess: (state: UserState) => void;
// //   signInFailed: (state: UserState, action: PayloadAction<Error>) => void;
// //   signUpFailed: (state: UserState, action: PayloadAction<Error>) => void;
// //   signOutFailed: (state: UserState, action: PayloadAction<Error>) => void;
// // }> = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     signInSuccess: (state, action: PayloadAction<UserData & { id: string }>) => {
// //       state.currentUser = action.payload;
// //     },
// //     signOutSuccess: (state) => {
// //       state.currentUser = null;
// //     },
// //     signInFailed: (state, action: PayloadAction<Error>) => {
// //       state.error = action.payload;
// //     },
// //     signUpFailed: (state, action: PayloadAction<Error>) => {
// //       state.error = action.payload;
// //     },
// //     signOutFailed: (state, action: PayloadAction<Error>) => {
// //       state.error = action.payload;
// //     },
// //   },
// // });

// // export const {
// //   signInSuccess,
// //   signOutSuccess,
// //   signInFailed,
// //   signUpFailed,
// //   signOutFailed,
// // } = userSlice.actions;

// // export const userReducer = userSlice.reducer;

// // export const googleSignInStart = createAsyncThunk(
// //   'user/googleSignInStart',
// //   async () => {
// //     // Add logic for Google sign-in start here
// //   }
// // );

// // export const emailSignInStart = createAsyncThunk(
// //   'user/emailSignInStart',
// //   async (payload: { email: string; password: string }) => {
// //     // Add logic for email sign-in start here
// //     return payload;
// //   }
// // );

// import { createSlice, createAsyncThunk, PayloadAction, Slice } from '@reduxjs/toolkit';
// import { UserData } from '../../utils/firebase/firebase/firebase.utils';
// import { getCurrentUser,  createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   signInAuthUserWithEmailAndPassword,
//   createAuthUserWithEmailAndPassword,
//   signOutUser,
//   AdditionalInformation, } from '../../utils/firebase/firebase/firebase.utils';
// // Export the UserState type
// export interface UserState {
//   currentUser: UserData | null;
//   isLoading: boolean;
//   error: Error | null;
// }

// const initialState: UserState = {
//   currentUser: null,
//   isLoading: false,
//   error: null,
// };

// // Create a Redux Toolkit slice
// const userSlice: Slice<UserState, {
//   signInSuccess: (state: UserState, action: PayloadAction<UserData & { id: string }>) => void;
//   signOutSuccess: (state: UserState) => void;
//   signInFailed: (state: UserState, action: PayloadAction<Error>) => void;
//   signUpFailed: (state: UserState, action: PayloadAction<Error>) => void;
//   signOutFailed: (state: UserState, action: PayloadAction<Error>) => void;
//   checkUserSession: (state: UserState) => void;
// }> = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     signInSuccess: (state, action: PayloadAction<UserData & { id: string }>) => {
//       state.currentUser = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     signOutSuccess: (state) => {
//       state.currentUser = null;
//       state.isLoading = false;
//       state.error = null;
//     },
//     signInFailed: (state, action: PayloadAction<Error>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     signUpFailed: (state, action: PayloadAction<Error>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     signOutFailed: (state, action: PayloadAction<Error>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     checkUserSession: (state) => {
//       // Logic for checkUserSession
//     },
//   },
// });

// export const {
//   signInSuccess,
//   signOutSuccess,
//   signInFailed,
//   signUpFailed,
//   signOutFailed,
//   checkUserSession,
// } = userSlice.actions;

// export const userReducer = userSlice.reducer;

// // Thunks for async operations
// export const googleSignInStart = createAsyncThunk(
//   'user/googleSignInStart',
//   async () => {
//     const { user } = await signInWithGooglePopup();
//     return user;
//   }
// );

// export const emailSignInStart = createAsyncThunk(
//   'user/emailSignInStart',
//   async (payload: { email: string; password: string }) => {
//     const userCredential = await signInAuthUserWithEmailAndPassword(payload.email, payload.password);
//     return userCredential.user;
//   }
// );

// export const signUpStart = createAsyncThunk(
//   'user/signUpStart',
//   async (payload: { email: string; password: string; displayName: string }) => {
//     const userCredential = await createAuthUserWithEmailAndPassword(payload.email, payload.password);
//     return { user: userCredential.user, additionalDetails: { displayName: payload.displayName } };
//   }
// );

// export const signOutStart = createAsyncThunk(
//   'user/signOutStart',
//   async () => {
//     await signOutUser();
//   }
// );

// // Add other thunks as needed

import { createSlice, createAsyncThunk, PayloadAction, Slice } from '@reduxjs/toolkit';
import { UserData } from '../../utils/firebase/firebase/firebase.utils';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
} from '../../utils/firebase/firebase/firebase.utils';

export interface UserState {
  currentUser: UserData | null;
  isLoading: boolean;
  error: Error | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice: Slice<UserState, {
  signInSuccess: (state: UserState, action: PayloadAction<UserData & { id: string }>) => void;
  signOutSuccess: (state: UserState) => void;
  signInFailed: (state: UserState, action: PayloadAction<Error>) => void;
  signUpFailed: (state: UserState, action: PayloadAction<Error>) => void;
  signOutFailed: (state: UserState, action: PayloadAction<Error>) => void;
  checkUserSession: (state: UserState) => void;
}> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess: (state, action: PayloadAction<UserData & { id: string }>) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
    signInFailed: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signUpFailed: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signOutFailed: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    checkUserSession: (state) => {
      // Logic for checkUserSession
    },
  },
});

export const {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
  checkUserSession,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

export const googleSignInStart = createAsyncThunk(
  'user/googleSignInStart',
  async () => {
    try {
      const result: any = await signInWithGoogleRedirect();
      if (result && result.user) {
        return result.user;
      } else {
        throw new Error('Google sign-in failed');
      }
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

export const emailSignInStart = createAsyncThunk(
  'user/emailSignInStart',
  async (payload: { email: string; password: string }) => {
    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(payload.email, payload.password);
      if (userCredential && userCredential.user) {
        return userCredential.user;
      } else {
        throw new Error('Email sign-in failed');
      }
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

export const signUpStart = createAsyncThunk(
  'user/signUpStart',
  async (payload: { email: string; password: string; displayName: string }) => {
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(payload.email, payload.password);
      if (userCredential && userCredential.user) {
        return { user: userCredential.user, additionalDetails: { displayName: payload.displayName } };
      } else {
        throw new Error('Sign-up failed');
      }
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

export const signOutStart = createAsyncThunk(
  'user/signOutStart',
  async () => {
    try {
      await signOutUser();
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

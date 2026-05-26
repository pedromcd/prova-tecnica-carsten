export const state = {
  page: 'login',

  jwt: localStorage.getItem('jwt') || null,

  email: '',
};

export function setState(newState) {

  Object.assign(state, newState);

  if (state.jwt) {
    localStorage.setItem(
      'jwt',
      state.jwt
    );

  } else {
    localStorage.removeItem('jwt');
  }
}
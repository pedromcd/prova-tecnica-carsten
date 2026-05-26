export const state = {
  page: 'login',
  jwt: null,
  email: '',
};

export function setState(newState) {
  Object.assign(state, newState);
}
import { api } from './api.js';

import { router } from './router.js';

import {
  state,
  setState,
} from './state.js';

const app = document.getElementById('app');

function render() {

  app.innerHTML = router();

  setupEvents();
}

function setupEvents() {

  setupLogin();

  setupLogout();
}

function setupLogin() {

  const form =
    document.getElementById(
      'login-form'
    );

  if (!form) return;

  form.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault();

      const formData =
        new FormData(form);

      const email =
        formData.get('email');

      const password =
        formData.get('password');

      try {

        const response = await api(
          '/api/v1/auth/login',
          'POST',
          {
            email,
            password,
          }
        );

        if (!response.ok) {
          alert(
            response.data?.message
            || 'Erro ao fazer login.'
          );

          return;
        }

        const jwt =
          response.data?.data?.token
          || response.data?.token;

        setState({
          jwt,
          page: 'dashboard',
        });

        render();

      } catch (error) {

        console.error(error);

        alert(
          'Erro interno.'
        );
      }
    }
  );
}

function setupLogout() {

  const logoutBtn =
    document.getElementById(
      'logout-btn'
    );

  if (!logoutBtn) return;

  logoutBtn.addEventListener(
    'click',
    () => {

      setState({
        jwt: null,
        page: 'login',
      });

      render();
    }
  );
}

if (state.jwt) {

  setState({
    page: 'dashboard',
  });
}

render();
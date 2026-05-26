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

  setupNavigation();

  setupRegister();

  setupSendCode();

  setupValidateCode();

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
            senha: password,
          }
        );

        console.log(response);

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

function setupNavigation() {

  const goRegister =
    document.getElementById(
      'go-register'
    );

  if (goRegister) {

    goRegister.addEventListener(
      'click',
      () => {

        setState({
          page: 'register',
        });

        render();
      }
    );
  }

  const goLogin =
    document.getElementById(
      'go-login'
    );

  if (goLogin) {

    goLogin.addEventListener(
      'click',
      () => {

        setState({
          page: 'login',
        });

        render();
      }
    );
  }
}

function setupRegister() {

  const form =
    document.getElementById(
      'register-form'
    );

  if (!form) return;

  form.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault();

      const formData =
        new FormData(form);

      const name =
        formData.get('name');

      const email =
        formData.get('email');

      const password =
        formData.get('password');

      console.log({
        nome: name,
        email,
        senha: password,
      });

      try {

        const response = await api(
          '/api/v1/auth/register',
          'POST',
          {
            nome: name,
            email,
            senha: password,
          }
        );

        console.log(response);

        if (!response.ok) {

          alert(
            response.data?.message
            || 'Erro ao cadastrar.'
          );

          return;
        }

        alert(
          'Conta criada com sucesso.'
        );

        setState({
          email,
          page: 'send-code',
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

function setupSendCode() {

  const form =
    document.getElementById(
      'send-code-form'
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

      try {

        const response = await api(
          '/api/v1/auth/send-code',
          'POST',
          {
            email,
          }
        );

        console.log(response);

        if (!response.ok) {

          alert(
            response.data?.message
            || 'Erro ao enviar código.'
          );

          return;
        }

        alert(
          'Código enviado com sucesso.'
        );

        setState({
          email,
          page: 'validate-code',
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

function setupValidateCode() {

  const form =
    document.getElementById(
      'validate-code-form'
    );

  if (!form) return;

  form.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault();

      const formData =
        new FormData(form);

      const code =
        formData.get('code');

      try {

        const response = await api(
          '/api/v1/auth/validate-code',
          'POST',
          {
            email: state.email,
            codigo: code,
          }
        );

        console.log(response);

        if (!response.ok) {

          alert(
            response.data?.message
            || 'Código inválido.'
          );

          return;
        }

        alert(
          'E-mail validado com sucesso.'
        );

        setState({
          page: 'login',
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

if (state.jwt) {

  setState({
    page: 'dashboard',
  });
}

render();
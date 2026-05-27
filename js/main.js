import { api } from './api.js';

import { router } from './router.js';

import {
  state,
  setState,
} from './state.js';

import {
  showMessage,
  removeMessage,
  setLoading,
} from './ui.js';

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

  setupForgotPassword();

  setupResetPassword();

}

function setupLogin() {

  const form =
    document.getElementById(
      'login-form'
    );

  if (!form) return;

  const submitButton =
    form.querySelector(
      'button[type="submit"]'
    );

  form.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault();

      removeMessage(form);

      const formData =
        new FormData(form);

      const email =
        formData.get('email');

      const password =
        formData.get('password');

      try {

        setLoading(
          submitButton,
          true
        );

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

          showMessage(
            form,
            response.data?.message
            || 'Erro ao fazer login.'
          );

          return;
        }

        showMessage(
          form,
          'Login realizado com sucesso.',
          'success'
        );

        const jwt =
          response.data?.data?.token
          || response.data?.token;

        setState({
          jwt,
        });

        setTimeout(
          async () => {

            await loadUser();

          },
          800
        );

      } catch (error) {

        console.error(error);

        showMessage(
          form,
          'Erro interno.'
        );

      } finally {

        setLoading(
          submitButton,
          false
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

  const goForgot =
    document.getElementById(
      'go-forgot'
   );

  if (goForgot) {

    goForgot.addEventListener(
      'click',
      () => {

        setState({
          page: 'forgot-password',
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

  const submitButton =
    form.querySelector(
      'button[type="submit"]'
    );

  form.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault();

      removeMessage(form);

      const formData =
        new FormData(form);

      const name =
        formData.get('name');

      const email =
        formData.get('email');

      const password =
        formData.get('password');

      if (password.length < 8) {

        showMessage(
          form,
          'A senha deve ter no mínimo 8 caracteres.'
        );

        return;
      }

      try {

        setLoading(
          submitButton,
          true
        );

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

          showMessage(
            form,
            response.data?.message
            || 'Erro ao cadastrar.'
          );

          return;
        }

        showMessage(
          form,
          'Conta criada com sucesso.',
          'success'
        );

        setState({
          email,
          page: 'send-code',
        });

        setTimeout(
          () => {

            render();

          },
          800
        );

      } catch (error) {

        console.error(error);

        showMessage(
          form,
          'Erro interno.'
        );

      } finally {

        setLoading(
          submitButton,
          false
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
          jwt: null,
          user: null,
          email: '',
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

async function loadUser() {

  try {

    const response = await api(
      '/api/v1/user/me',
      'GET',
      null,
      state.jwt
    );

    console.log(response);

    if (!response.ok) {

      alert(
        'Sessão inválida.'
      );

      setState({
        jwt: null,
        page: 'login',
      });

      render();

      return;
    }

    const user =
      response.data?.data
      || response.data;

    setState({
      user,
      page: 'dashboard',
    });

    render();

  } catch (error) {

    console.error(error);

    alert(
      'Erro ao carregar usuário.'
    );
  }
}

function setupForgotPassword() {

  const form =
    document.getElementById(
      'forgot-password-form'
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
          '/api/v1/auth/forgot-password',
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
          'Código enviado.'
        );

        setState({
          email,
          page: 'reset-password',
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

function setupResetPassword() {

  const form =
    document.getElementById(
      'reset-password-form'
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

      const password =
        formData.get('password');

      try {

        const response = await api(
          '/api/v1/auth/reset-password',
          'POST',
          {
            email: state.email,
            codigo: code,
            senha: password,
          }
        );

        console.log(response);

        if (!response.ok) {

          alert(
            response.data?.message
            || 'Erro ao redefinir senha.'
          );

          return;
        }

        alert(
          'Senha redefinida com sucesso.'
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

  loadUser();

} else {

  render();
}
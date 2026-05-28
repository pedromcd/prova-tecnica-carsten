import { state } from './state.js';

import {
  loginPage,
} from './pages/login.js';

import {
  dashboardPage,
} from './pages/dashboard.js';

import {
  registerPage,
} from './pages/register.js';

import {
  sendCodePage,
} from './pages/send-code.js';

import {
  validateCodePage,
} from './pages/validate-code.js';

import {
  forgotPasswordPage,
} from './pages/forgot-password.js';

import {
  resetPasswordPage,
} from './pages/reset-password.js';

export function router() {

  switch (state.page) {

    case 'login':
      return loginPage();

    case 'dashboard':
       if (!state.jwt) {

        setState({
          page: 'login',
        });

        return loginPage();
      }

  return dashboardPage(state.user);
      
    case 'register':
      return registerPage();

    case 'send-code':
      return sendCodePage();

    case 'validate-code':
      return validateCodePage();

    case 'forgot-password':
      return forgotPasswordPage();

    case 'reset-password':
      return resetPasswordPage();

    case 'validate-code':
      return `
        <div class="card">
          <h1>Confirmar código</h1>

          <form id="validate-form">

            <label>Código</label>

            <input
              type="text"
              name="codigo"
              placeholder="123456"
              required
            >

            <button type="submit">
              Validar código
            </button>

          </form>
        </div>
      `;  

    default:
      return `
        <div class="card">
          <h1>Página não encontrada</h1>
        </div>
      `;
  }
}
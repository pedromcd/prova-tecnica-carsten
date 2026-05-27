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

export function router() {

  switch (state.page) {

    case 'login':
      return loginPage();

    case 'dashboard':
      return dashboardPage(state.user);
      
    case 'register':
      return registerPage();

    case 'send-code':
      return sendCodePage();

    case 'validate-code':
      return validateCodePage();

    default:
      return `
        <div class="card">
          <h1>Página não encontrada</h1>
        </div>
      `;
  }
}
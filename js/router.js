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

export function router() {

  switch (state.page) {

    case 'login':
      return loginPage();

    case 'dashboard':
      return dashboardPage();
      
    case 'register':
      return registerPage();

    default:
      return `
        <div class="card">
          <h1>Página não encontrada</h1>
        </div>
      `;
  }
}
import { state } from './state.js';

import {
  loginPage,
} from './pages/login.js';

import {
  dashboardPage,
} from './pages/dashboard.js';

export function router() {

  switch (state.page) {

    case 'login':
      return loginPage();

    case 'dashboard':
      return dashboardPage();

    default:
      return `
        <div class="card">
          <h1>Página não encontrada</h1>
        </div>
      `;
  }
}
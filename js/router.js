import { state } from './state.js';

import {
  loginPage,
} from './pages/login.js';

export function router() {

  switch (state.page) {

    case 'login':
      return loginPage();

    default:
      return `
        <div class="card">
          <h1>Página não encontrada</h1>
        </div>
      `;
  }
}
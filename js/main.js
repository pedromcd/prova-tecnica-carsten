import { api } from './api.js';

const app = document.getElementById('app');

async function render() {

  app.innerHTML = `
    <div class="card">
      <h1>Testando API...</h1>
    </div>
  `;

  const response = await api('/health');

  app.innerHTML = `
    <div class="card">
      <h1>Status da API</h1>

      <pre>
${JSON.stringify(response.data, null, 2)}
      </pre>
    </div>
  `;
}

render();
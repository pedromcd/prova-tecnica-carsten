import { state } from '../state.js';

export function validateCodePage() {

  return `
    <div class="card">

      <h1>Validar código</h1>

      <p class="subtitle">
        Digite o código enviado para:

        <strong>${state.email}</strong>
      </p>

      <form id="validate-code-form">

        <div class="field">
          <label>Código</label>

          <input
            type="text"
            name="code"
            placeholder="123456"
            required
          />
        </div>

        <button
          type="submit"
          class="primary-btn"
        >
          Validar código
        </button>

      </form>

    </div>
  `;
}
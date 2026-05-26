import { state } from '../state.js';

export function sendCodePage() {

  return `
    <div class="card">

      <h1>Verificar e-mail</h1>

      <p class="subtitle">
        Enviaremos um código para seu e-mail.
      </p>

      <form id="send-code-form">

        <div class="field">
          <label>E-mail</label>

          <input
            type="email"
            name="email"
            value="${state.email || ''}"
            placeholder="seu@email.com"
            required
          />
        </div>

        <button
          type="submit"
          class="primary-btn"
        >
          Enviar código
        </button>

      </form>

      <button
        id="go-login"
        class="secondary-btn"
      >
        Voltar para login
      </button>

    </div>
  `;
}
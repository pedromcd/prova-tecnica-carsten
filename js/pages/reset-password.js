import { state } from '../state.js';

export function resetPasswordPage() {

  return `
    <div class="card">

      <h1>Redefinir senha</h1>

      <p class="subtitle">
        Digite o código recebido.
      </p>

      <form id="reset-password-form">

        <div class="field">
          <label>Código</label>

          <input
            type="text"
            name="code"
            placeholder="123456"
            required
          />
        </div>

        <div class="field">
          <label>Nova senha</label>

          <input
            type="password"
            name="password"
            placeholder="Nova senha"
            required
          />
        </div>

        <button
          type="submit"
          class="primary-btn"
        >
          Redefinir senha
        </button>

      </form>

    </div>
  `;
}
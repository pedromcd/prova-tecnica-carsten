export function forgotPasswordPage() {

  return `
    <div class="card">

      <h1>Recuperar senha</h1>

      <p class="subtitle">
        Enviaremos um código para seu e-mail.
      </p>

      <form id="forgot-password-form">

        <div class="field">
          <label>E-mail</label>

          <input
            type="email"
            name="email"
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
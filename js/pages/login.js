export function loginPage() {

  return `
    <div class="card">

      <h1>Entrar</h1>

      <p class="subtitle">
        Faça login para continuar.
      </p>

      <form id="login-form">

        <div class="field">
          <label>E-mail</label>

          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
          />
        </div>

        <div class="field">
          <label>Senha</label>

          <input
            type="password"
            name="password"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          class="primary-btn"
        >
          Entrar
        </button>

      </form>

    </div>
  `;
}
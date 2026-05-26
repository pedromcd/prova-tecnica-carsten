export function registerPage() {

  return `
    <div class="card">

      <h1>Criar conta</h1>

      <p class="subtitle">
        Preencha os dados abaixo.
      </p>

      <form id="register-form">

        <div class="field">
          <label>Nome</label>

          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
          />
        </div>

        <div class="field">
          <label>E-mail</label>

          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div class="field">
          <label>Senha</label>

          <input
            type="password"
            name="password"
            placeholder="Mínimo 8 caracteres"
            required
          />
        </div>

        <button
          type="submit"
          class="primary-btn"
        >
          Criar conta
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
export function dashboardPage(user) {

  if (!user) {

    return `
      <div class="card">

        <h1>Carregando...</h1>

      </div>
    `;
  }

  return `
    <div class="card">

      <h1>Meu perfil</h1>

      <p class="subtitle">
        Dados retornados pela API.
      </p>

      <div class="field">
        <label>Nome</label>

        <input
          value="${user.nome || ''}"
          disabled
        />
      </div>

      <div class="field">
        <label>E-mail</label>

        <input
          value="${user.email || ''}"
          disabled
        />
      </div>

      <button
        id="logout-btn"
        class="primary-btn"
      >
        Sair
      </button>

    </div>
  `;
}
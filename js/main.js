const app = document.getElementById('app');

function render() {
  app.innerHTML = `
    <div class="card">
      <h1>Carsten Auth</h1>

      <p>
        Aplicação iniciada com sucesso.
      </p>
    </div>
  `;
}

render();
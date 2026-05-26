import { router } from './router.js';

const app = document.getElementById('app');

function render() {
  app.innerHTML = router();
}

render();
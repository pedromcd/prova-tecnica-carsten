export function showMessage(
  element,
  message,
  type = 'error'
) {

  removeMessage(element);

  const div =
    document.createElement('div');

  div.className =
    `message ${type}`;

  div.textContent =
    message;

  element.appendChild(div);
}

export function removeMessage(
  element
) {

  const oldMessage =
    element.querySelector(
      '.message'
    );

  if (oldMessage) {

    oldMessage.remove();
  }
}

export function setLoading(
  button,
  loading
) {

  if (loading) {

    button.disabled = true;

    button.dataset.originalText =
      button.textContent;

    button.textContent =
      'Carregando...';

  } else {

    button.disabled = false;

    button.textContent =
      button.dataset.originalText;
  }
}
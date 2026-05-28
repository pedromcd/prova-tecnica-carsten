import {
  API_BASE,
  PK_TOKEN,
} from './config.js';

export async function api(
  endpoint,
  method = 'GET',
  body = null,
  jwt = null
) {

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${PK_TOKEN}`,
  };

  if (jwt) {
    headers['X-Access-Token'] = jwt;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(
    API_BASE + endpoint,
    options
  );

  const data = await response
    .json()
    .catch(() => ({}));

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}
const API_BASE_URL = process.env.REACT_APP_NOTE_TAKING_APP_BACKEND_URL;

async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  return response.json();
}

export function signIn(email, password) {
  return fetchFromAPI('login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

export function signUp(email, password) {
  return fetchFromAPI('register', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

export function fetchNotes() {
  return fetchFromAPI('notes');
}

export function createNote(content) {
  return fetchFromAPI('notes', {
    method: 'POST',
    body: JSON.stringify({ content })
  });
}

export function updateNote(id, content) {
  return fetchFromAPI(`notes/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ content })
  });
}

export function deleteNote(id) {
  return fetchFromAPI(`notes/${id}`, {
    method: 'DELETE'
  });
}
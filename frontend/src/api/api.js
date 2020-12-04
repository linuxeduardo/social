const API_URL = 'http://localhost:8000';

export function GET_USER(token) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  };
}

export function POST_NEW_USER(body) {
  return {
    url: `${API_URL}/api/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}

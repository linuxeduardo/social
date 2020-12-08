const API_URL = 'http://localhost:4000';

// get all users
export function GET_USERS() {
  return {
    url: `${API_URL}/api/users`,
    options: {
      method: 'GET'
    }
  };
}

// get user
export function GET_USER(token) {
  return {
    url: `${API_URL}/api/users/me`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  };
}

// user login
export function POST_LOGIN(body) {
  return {
    url: `${API_URL}/api/auth`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
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

// get all messages
export function GET_MESSAGES() {
  return {
    url: `${API_URL}/api/messages`,
    options: {
      method: 'GET'
    }
  };
}

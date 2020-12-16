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

// register user
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

// validate token
export function POST_VALIDATE_TOKEN(token) {
  return {
    url: `${API_URL}/api/auth/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  };
}

// edit user Profile
export function PUT_UPDATE_USER(token, id, body) {
  // TODO: form-data
  return {
    url: `${API_URL}/api/users/${id}`,
    options: {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}

// post new message
// user login
export function POST_NEW_MESSAGE(content, token) {
  return {
    url: `${API_URL}/api/messages`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    }
  };
}
// get all messages
export function GET_ALL_MESSAGES() {
  return {
    url: `${API_URL}/api/messages`,
    options: {
      method: 'GET'
    }
  };
}

// get all messages by user
export function GET_ALL_MESSAGES_BY_USER(token) {
  return {
    url: `${API_URL}/api/messages/my/messages`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  };
}

// delete message
export function DELETE_MESSAGE(id, token) {
  return {
    url: `${API_URL}/api/messages/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  };
}
// - -- -- - - send new reply
export function POST_NEW_REPLY(reply, messageId, token) {
  console.log(reply, messageId, token);
  return {
    url: `${API_URL}/api/reply/${messageId}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reply)
    }
  };
}

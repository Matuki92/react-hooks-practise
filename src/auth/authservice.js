const API_URL = 'http://localhost:3000/auth';

export const me = async () => {

  try {
    const response = await fetch(`${API_URL}/me`, {
      credentials: 'include',
      method: 'GET'
    });

    if (response.status !== 200) {
      return null;
    }

    const user = await response.json();

    return user;
  } catch {
    return null;
  }
}

export const signup = async (username, password) => {

  try {
    const response = await fetch(`${API_URL}/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (response.status !== 200) {
      return null;
    }

    const user = await response.json();

    return user;
  } catch {
    return null;
  }
}

export const login = async (username, password) => {

  try {
    const response = await fetch(`${API_URL}/login`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (response.status !== 200) {
      return null;
    }

    const user = await response.json();

    return user;
  } catch {
    return null;
  }
}

export const logout = async user => {

  try {
    const response = await fetch(`${API_URL}/logout`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.status !== 204) {
      return null;
    }

    return true;
  } catch {
    return null;
  }
}
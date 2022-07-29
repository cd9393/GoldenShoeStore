const API_DOMAIN = "http://localhost:4000";

export async function registerAccount(user) {
  const response = await fetch(`${API_DOMAIN}/auth/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });

  const jsonData = await response.json();

  if (!response.ok) {
    throw new Error(jsonData.data.error || "Could not register account");
  }

  return jsonData;
}

export async function login(user) {
  const response = await fetch(`${API_DOMAIN}/auth/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });

  const jsonData = await response.json();

  if (!response.ok) {
    throw new Error(jsonData.data.error || "Could not login account");
  }

  return jsonData;
}

export async function verifyToken(token) {
  const response = await fetch(`${API_DOMAIN}/auth/is-verify`, {
    method: "GET",
    body: {},
    headers: { "Content-Type": "application/json", token: token },
  });

  const jsonData = await response.json();

  if (!response.ok) {
    throw new Error(jsonData.data.error || "Could not login account");
  }

  return jsonData;
}

export async function joinNewsLetter(email) {
  const body = {
    email,
    consent: "Y",
    consentHow: "Online Newsletter",
  };

  const response = await fetch(`${API_DOMAIN}/mail-list`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await response.json();

  if (!response.ok) {
    throw new Error(jsonData.data.error || "Could not login account");
  }

  return jsonData;
}

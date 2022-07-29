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

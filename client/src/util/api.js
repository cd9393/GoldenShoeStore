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

  const response = await fetch(`${API_DOMAIN}/mailing-contact`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await response.json();

  if (!response.ok) {
    throw new Error(jsonData.data.error || "Could not add to mailing list");
  }

  return jsonData;
}

export async function getOrders() {
  const response = await fetch(`${API_DOMAIN}/orders/my-orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  const jsonData = await response.json();

  if (!response.ok) {
    throw new Error(jsonData.data.error || "Could not retireve orders");
  }
  return jsonData.data;
}

export async function getOrderDetails(orderId) {
  const response = await fetch(`${API_DOMAIN}/orders/my-orders/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });

  const jsonData = await response.json();

  if (!response.ok) {
    throw new Error(jsonData.data.error || "Could not retireve orders");
  }
  return jsonData.data;
}

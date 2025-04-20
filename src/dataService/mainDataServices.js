export const getData = async (operation, endpoint, body = null) => {
  const url = `http://localhost:8000${endpoint}`;

  const requestOptions = {
    method: operation.toUpperCase(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  if (body) {
    requestOptions.body = new URLSearchParams(body).toString();
  }

  const response = await fetch(url, requestOptions);
  const data = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
};

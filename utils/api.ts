async function api(
  path: string,
  method: string,
  body: { [key: string]: string },
): Promise<any> {
  try {
    const response = await fetch(`/api${path}`, {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();

    if (!response?.ok) {
      throw new Error(json?.message);
    }

    return json;
  } catch (err) {
    const error = err.message
      ? err
      : new Error("Something bad happened, try again later");
    throw error;
  }
}

export default api;

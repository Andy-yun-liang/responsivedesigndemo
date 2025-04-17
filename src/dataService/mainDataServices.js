
export const getData = async (operation, endpoint, body = null) => {
    const url = `http://localhost:8000${endpoint}`;
  
    const requestOptions = {
      method: operation.toUpperCase(), // <-- This sets the HTTP method for fetch
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  
    if (body) {
      requestOptions.body = new URLSearchParams(body).toString();
    }
  
    try {
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      console.log(`${operation} response:`, data);
      return data;
    } catch (error) {
      console.error(`${operation} failed:`, error);
      return null;
    }
  };
  
  
const SWRFetch = async (path: string, headers?: any) => {
  try {
    const res = await fetch(path, { headers: headers, mode: "no-cors" });

    if (!res.ok) {
      const error = {
        status: res.status,
        message: res.statusText,
      };

      throw error;
    }

    return await res.json();
  } catch (err) {
    // Attach extra info to the error object.
    console.log("[SWRFetch error]:", err);
    return err;
  }
};

export default SWRFetch;

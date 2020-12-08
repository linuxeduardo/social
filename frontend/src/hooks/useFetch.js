import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [fetchError, setFetchError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setFetchError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message); // >>??
    } catch (err) {
      console.log(err);
      setFetchError(err.message);
      json = null;
    } finally {
      setData(json);
      setLoading(false);

      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    fetchError,
    request
  };
};

export default useFetch;

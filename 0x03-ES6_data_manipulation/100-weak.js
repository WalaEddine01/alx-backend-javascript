const createAPIManager = () => {
  const weakMap = new WeakMap();

  const queryAPI = (endpoint) => {
    if (weakMap.has(endpoint)) {
      const endpointItem = weakMap.get(endpoint);
      if (endpointItem >= 4) {
        throw new Error('Endpoint load is high');
      }
      weakMap.set(endpoint, endpointItem + 1);
    } else {
      weakMap.set(endpoint, 1);
    }
  };

  return {
    queryAPI,
  };
};

export default createAPIManager();

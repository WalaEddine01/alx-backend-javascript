export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
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

function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: 'Successful transaction' });
      } else {
        reject({ error: 'Error during payment API' });
      }
    }, 1000);
  });
}

export default getPaymentTokenFromAPI;

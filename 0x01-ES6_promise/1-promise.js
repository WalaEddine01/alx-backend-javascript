export default function getFullResponseFromAPI(success) {
  return new Promise((r, re) => {
    if (success) r({ status: 200, body: 'Success' });
    else {
      re(new Error('The fake API is not working currently'));
    }
  });
}

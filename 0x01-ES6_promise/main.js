import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const successResponse = handleResponseFromAPI(promise);
console.log(successResponse);
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('Response Data');
      } else {
        reject(new Error('Request failed'));
      }
    }, 1000);
  });
}

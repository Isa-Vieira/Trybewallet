const getApi = () => (fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))));

export default getApi;
// requisição da Api


const axios = {}

axios.get = () => Promise.resolve({
    status: 200,
    statusText: 'OK',
    delete: 'borrar'
});


module.exports = axios;


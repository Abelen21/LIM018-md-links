
const axios = () => Promise.resolve({
    status: 200,
    statusText: 'OK'
});


axios.get = () => Promise.resolve({
    status: 200,
    statusText: 'OK'
});


module.exports = axios;


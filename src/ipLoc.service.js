const axios = require('axios');

const createIpLocCaller = () => {
  return axios.create({
    baseURL: `https://iploc.moontower.cloud/v1`,
  });
}

const getIpLocation = (key, ip) => {
  const ipLocCaller = createIpLocCaller();
  return ipLocCaller.get(`/ip/${ip}?key=${key}`);
}

module.exports = {
  getIpLocation
}
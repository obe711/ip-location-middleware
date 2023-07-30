
const requestIp = require('request-ip');
const ipLocService = require("./ipLoc.service");

module.exports = (apiKey) => async (req, res, next) => {
  try {
    const clientIP = requestIp.getClientIp(req);
    if (!clientIP) next();
    req.clientIP = clientIP;

    const result = await ipLocService.getIpLocation(apiKey, clientIP);
    req.ipLoc = result?.data;
    next();
  } catch {
    next();
  }

}
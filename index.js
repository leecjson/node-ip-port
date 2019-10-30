'use strict';

const net = require('net');
const isValidPort = require('is-valid-port');

/**
 * @param {string} str "ip:port" string
 * @param {boolean} ipAddressOnly only ip address will parsed, 'false' will treat like a domain or something else
 * @returns {[string, number]} 'undefined' represent parse failed.
 */
exports = module.exports = (str) => {
  if (typeof str != 'string' || str.length == 0) {
    throw new Error('expect string input'); 
  }
  const d = str.split(':');
  if (d.length != 2) {
    throw new Error('invalid ip:port format'); 
  }
  const ip = d[0];
  if (!net.isIP(ip)) {
    throw new Error('invalid ipv4/ipv6 address'); 
  }
  const port = parseInt(d[1], 10);
  if (!isValidPort(port)) {
    throw new Error('invalid port number'); 
  }
  return [ip, port];
}
# node-ip-port
Parse ip and port from a string that formed by \"ip:port\"

# Usage
```javascript
const parseIpPort = require('parse-ip-port');

try {
  const [ip, port] = parseIpPort('127.0.0.1:80');
} catch (e) {
  console.log(e.toString());
}
```
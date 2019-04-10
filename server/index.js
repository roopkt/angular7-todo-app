const app = require('./config/express');
const config = require('./config/config');

// initialize mongo
require('./config/mongoose');

// listen to port
app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});

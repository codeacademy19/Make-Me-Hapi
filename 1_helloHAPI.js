const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});
server.route({
  path: '/',
  method: 'GET',
  handler: (request, h) => 'Hello hapi',
});
const init = async () => {
  await server.start();
};
// init();
module.exports = server;

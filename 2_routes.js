const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});
server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, h) => `Hello ${encodeURIComponent(request.params.name)}`,
});
const init = async () => {
  await server.start();
};
  // init();
module.exports = server;

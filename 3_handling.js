const Inert = require('inert');
const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});
const init = async () => {
  await server.register(Inert);
  server.route({
    method: 'GET',
    path: '/',
    handler: {

      file: './index.html',
    },
  });
  if (!module.parent) {
    await server.start();
  }
};

// console.log('Server running at:', server.info.uri);

init();
module.exports = server;

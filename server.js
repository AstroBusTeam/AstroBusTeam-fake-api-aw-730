const jsonServer = require('json-server');

const db = require('./db.json');
const routes = require('./routes.json');

const server = jsonServer.create();
const router = jsonServer.router(db);

server.use(jsonServer.defaults());
server.use(jsonServer.rewriter(routes));
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});

module.exports = server;
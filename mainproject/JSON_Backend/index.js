import jsonServer from 'json-server';
import path from 'path'
import fs from 'fs'
import cors from 'cors'
const server = jsonServer.create();

const __dirname = path.resolve()
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')))
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(cors())

const port = 8080;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

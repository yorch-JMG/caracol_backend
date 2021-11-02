import {App} from './app';
require("./connection");

async function main() {
  const app = new App(3000);
  await app.listen();
}

main();



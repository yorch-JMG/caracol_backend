import {App} from './app';
import { connection } from './connection';

async function main() {
  await connection.connect((err) => {
    if(err) throw err;
    else{
      console.log('Connected to database!')
    }
  }); 
  const app = new App(3000);
  await app.listen();
}

main();



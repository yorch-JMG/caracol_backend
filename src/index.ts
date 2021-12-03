import {App} from './app';
import { connection } from './connection';
import { registerNewSales } from '../src/dataGenScripts/registerNewSales';
import {formatDate} from '../src/dataGenScripts/formatDate';
async function main() {
  connection.connect((err) => {
    if(err) throw err;
    else{
      //const fecha = formatDate(21,4,2021);
      //registerNewSales(fecha)
      console.log('Connected to database!')
    }
  }); 
  const app = new App(3000);
  await app.listen();
}

main();



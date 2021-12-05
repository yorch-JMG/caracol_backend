import { connection } from "../../connection";
import mysql from 'mysql';
import { generateFakeSalesArray } from '../generateFakeSalesArray';

export const registerNewSales = async ( fecha : string ) => {
  const fakeSalesArray = generateFakeSalesArray( fecha, 3 ); 
  const createUser = "CALL createSale(?,?,?,?,?,?,?)" ;
  let query;
  let nombre, tipo_boleto, edad, correoElectronico, precio, idEvento;
  for ( let i = 0 ; i < fakeSalesArray.length ; i++ ) { 
    nombre = fakeSalesArray[i].nombre;
    tipo_boleto = fakeSalesArray[i].tipoBoleto;
    edad = fakeSalesArray[i].edad;
    precio = fakeSalesArray[i].precio;
    correoElectronico = fakeSalesArray[i].correoElectronico;
    idEvento = fakeSalesArray[i].idEvento;

    query = mysql.format(createUser, [nombre, fecha, tipo_boleto, edad, correoElectronico, precio, idEvento]); 
    console.log(query)
    
      connection.query( query,
                       (err, result) => {
                         if(err) console.log(err);
                         console.log(result);
                       })

  }
}


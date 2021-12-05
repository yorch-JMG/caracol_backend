import { generateFakeSalesArray } from '../dataGenScripts/generateFakeSalesArray';
import { formatDate } from '../dataGenScripts/formatDate';
import { Router } from "express";
import {connection} from "../connection";
import mysql from 'mysql';
export const router = Router();

router.post('/api/sales/makeSales', async (req, res) => {
  const fecha = formatDate(12, 2, 2020);
  const fakeSalesArray = generateFakeSalesArray( fecha, 50 ); 
  const createUser = "CALL createSale(?,?,?,?,?,?)" ;
  let query;
  let nombre, tipo_boleto, edad, correoElectronico, precio;
  for ( let i = 0 ; i < fakeSalesArray.length ; i++ ) { 
    nombre = fakeSalesArray[i].nombre;
    tipo_boleto = fakeSalesArray[i].tipoBoleto;
    edad = fakeSalesArray[i].edad;
    precio = fakeSalesArray[i].precio;
    query = mysql.format(createUser, [nombre, fecha, tipo_boleto, edad, correoElectronico, precio]); 
    console.log(query)
    
      connection.query( query,
                       (err, result) => {
                          if(err) throw err;
                          console.log(result);
                          res.json(result);
                       })

  }
});

router.post('/api/sales/createTicket', async (req, res) => {
  const nombre = req.body.nombre_to_add;
  const fecha = req.body.date_to_add;
  const tipo_boleto = req.body.tipo_boleto;
  const edad = req.body.edad_to_add;
  const correoElectronico = req.body.correo_electronico_to_add;
  const id_evento = req.body.id_evento;
  console.log(nombre)
  
  const createSale = "CALL createSale(?,?,?,?,?,?,?)" ;

  const query = mysql.format(createSale, [nombre, fecha, tipo_boleto, edad, correoElectronico, precio, id_evento ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       
});

router.post('api/sales/getTicketForVisitante', async (req,res) => {
  const getTicketImmediately = "CALL getTicketForVisitante()";
  const query = mysql.format(getTicketImmediately, []);
  console.log(query);
  
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })

  
});

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
                          console.log(result)
                          res.json(result)
                       })

  }
});

router.post('api/sales/getVisitanteInfo', async (req, res) => {
  const eventoId = req.body.eventoId;
  const nombre = req.body.nombre;
  const fecha = req.body.nombre;
  const tipoBoleto = req.body.tipoBoleto;
  const edad = req.body.edad;
  const correoElectronico = req.body.correoElectronico;
  
});

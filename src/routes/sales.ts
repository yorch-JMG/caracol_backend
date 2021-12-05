import { generateFakeSalesArray } from '../dataGenScripts/generateFakeSalesArray';
import { formatDate } from '../dataGenScripts/formatDate';
import { Router } from "express";
import {connection} from "../connection";
import mysql from 'mysql';

const router = Router();

router.post('/makeSales', async (req, res) => {
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

router.post('/createTicket', async (req, res) => {
  const nombre = req.body.nombre_to_add;
  const fecha = req.body.date_to_add;
  const tipo_boleto = req.body.tipo_boleto;
  const edad = req.body.edad_to_add;
  const correoElectronico = req.body.correo_electronico_to_add;
  const id_evento = req.body.id_evento;
  const precio = req.body.precio;
  console.log(nombre)
  
  const createSale = "CALL createSale(?,?,?,?,?,?,?)" ;

  const query = mysql.format(createSale, [nombre, fecha, tipo_boleto, edad, correoElectronico, precio, id_evento ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

router.get('/getTicketForVisitante', async (req,res) => {
  const getTicketImmediately = "CALL getTicketForVisitante()";
  const query = mysql.format(getTicketImmediately, []);
  console.log(query);
  
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  })
});

router.post('/getIngresosByDate', async (req, res) => {
  const dateForSearch = req.body.dateForSearch;
  const getIngresosByDate = "CALL getIngresosByDate(?)" ;

  const query = mysql.format(getIngresosByDate, [ dateForSearch ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

router.post('/getMostCommonTicketTypeByDate', async (req, res) => {
  const dateForSearch = req.body.dateForSearch;
  const getIngresosByDate = "CALL getMostCommonTicketTypeByDate(?)" ;

  const query = mysql.format(getIngresosByDate, [ dateForSearch ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

router.post('/getAverageAgeByDate', async (req, res) => {
  const dateForSearch = req.body.dateForSearch;
  const getAverageAgeByDate = "CALL getAverageAgeByDate(?)" ;

  const query = mysql.format(getAverageAgeByDate, [ dateForSearch ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

router.post('/getSalesByDate', async (req, res) => {
  const dateForSearch = req.body.dateForSearch;
  const getSalesForDate = "CALL getSalesByDate(?)" ;

  const query = mysql.format(getSalesForDate, [ dateForSearch ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

module.exports = router;

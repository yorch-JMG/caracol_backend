import { generateFakeSalesArray } from '../dataGenScripts/generateFakeSalesArray';
import { formatDate } from '../dataGenScripts/formatDate';
import {generateTicketTypeBasedOnAge} from '../dataGenScripts/generateTicketInfoBasedOnAge';
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
  const edad = req.body.edad_to_add;
  const correoElectronico = req.body.correo_electronico_to_add;
  const id_evento = req.body.id_evento;
  const precioTipo = generateTicketTypeBasedOnAge(edad);
  
  const createSale = "CALL createSaleForUser(?,?,?,?,?,?)" ;

  const query = mysql.format(createSale, [nombre, precioTipo.tipo, edad, correoElectronico, precioTipo.precio, id_evento ]); 
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

router.post('/getIngresosByInterval', async (req, res) => {
  const beginningDate = req.body.beginningDate;
  const endDate = req.body.endDate;
  const getIngresosByInterval = "CALL getIngresosByInterval(?,?)" ;

  const query = mysql.format(getIngresosByInterval, [ beginningDate, endDate ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});
router.post('/getAverageAgeByInterval', async (req, res) => {
  const beginningDate = req.body.beginningDate;
  const endDate = req.body.endDate;
  const getAverageAgeByInterval = "CALL getAverageAgeByInterval(?,?)" ;

  const query = mysql.format(getAverageAgeByInterval, [beginningDate, endDate]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});
router.post('/getMostCommonTicketTypeByInterval', async (req, res) => {
  const beginningDate = req.body.beginningDate;
  const endDate = req.body.endDate;
  const getMostCommonTicketTypeByInterval = "CALL getMostCommonTicketTypeByInterval(?,?)" ;

  const query = mysql.format(getMostCommonTicketTypeByInterval, [ beginningDate, endDate ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});


router.post('/getIngresosByEventId', async (req, res) => {
  const eventId = req.body.eventId;
  const getIngresosByEventId = "CALL getIngresosByEventId(?)" ;

  const query = mysql.format(getIngresosByEventId, [ eventId ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

router.post('/getMostCommonTicketTypeByEventId', async (req, res) => {
  const eventId = req.body.eventId;
  const getMostCommonTicketTypeByEventId = "CALL getMostCommonTicketTypeByEventId(?)" ;

  const query = mysql.format(getMostCommonTicketTypeByEventId, [ eventId ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

router.get('/getTotalYearsAndTotalSales', async (req, res) => {
  const getTotalYearsAndTotalSales = "CALL getTotalYearsAndTotalSales()" ;

  const query = mysql.format(getTotalYearsAndTotalSales, []); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

router.post('/getAverageAgeByEventId', async (req, res) => {
  const eventId = req.body.eventId;
  const getAverageAgeByEventId = "CALL getAverageAgeByEventId(?)" ;

  const query = mysql.format(getAverageAgeByEventId, [ eventId ]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result);
                       })
});

module.exports = router;


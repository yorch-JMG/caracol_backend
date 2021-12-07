import { Router } from "express";
import {connection} from "../connection";
import mysql from 'mysql';
export const router = Router();

router.get('/', async (req, res) => {
  const getAllEventos = "CALL getAllEventos()" ;
  let query;
    query = mysql.format(getAllEventos, []); 
    console.log(query)
    
      connection.query( query,
                       (err, result) => {
                          if(err) throw err;
                          console.log(result);
                          res.json(result);
                       })

  }
);

router.post('/materialesPorEvento', async (req, res) => {
  const idEvento = req.body.idEvento;
  const getMaterialesPorEventoId = "CALL getMaterialesPorEveentoId(?)"; 
  let query;
    query = mysql.format(getMaterialesPorEventoId, [idEvento]); 
    console.log(query)
    
      connection.query( query,
                       (err, result) => {
                          if(err) throw err;
                          console.log(result);
                          res.json(result);
                       })
});

router.post('/agregarMaterial', async (req, res) => {
  const idEvento = req.body.idEvento;
  const nombre = req.body.nombre;
  const tipo = req.body.tipo;
  const cantidad = req.body.cantidad;
  const agregarMaterial = "CALL agregarMaterialPorEventoId(?,?,?,?)"; 
  let query;
    query = mysql.format(agregarMaterial, [idEvento, nombre, tipo, cantidad]); 
    console.log(query)
    
      connection.query( query,
                       (err, result) => {
                          if(err) throw err;
                          console.log(result);
                          res.json(result);
                       })
});

router.post('/deleteMaterial', async (req, res) => {
  const idMaterial = req.body.idMaterial;
  const deleteMaterial = "CALL deleteMaterial(?)";
  let query;
    query = mysql.format(deleteMaterial, [idMaterial]); 
    console.log(query)
    
      connection.query( query,
                       (err, result) => {
                          if(err) throw err;
                          console.log(result);
                          res.json(result);
                       })

});

module.exports = router;

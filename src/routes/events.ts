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

module.exports = router;

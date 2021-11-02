import { Router } from "express";
import faker from 'faker';
import {connection} from "../connection";

export const router = Router();

router.get('/api/users', (req, res) => {
  connection.query("SELECT * FROM Empleado", (err, result) => {
      if(err) throw err;
      console.log(result)
      res.json(result)
  })
});

router.get('/api/users/create', async (req, res) => {
    connection.query( "CALL createUser('fernando','123', 'puesto', 'depa', 'caracool5@gmail.com', '12312123')",
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result)
                     })
})

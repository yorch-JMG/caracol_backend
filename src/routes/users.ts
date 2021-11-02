import { Router } from "express";
import {connection} from "../connection";
import bcryptjs from 'bcryptjs';
import mysql from 'mysql';
export const router = Router();

router.get('/api/users', (req, res) => {
  connection.query("SELECT * FROM Empleado", (err, result) => {
      if(err) throw err;
      console.log(result)
      res.json(result)
  })
});

router.get('/api/users/create', async (req, res) => {
  const nombre = req.body.nombre;
  const contrasena = req.body.contrasena;

  const encryptedPwd = bcryptjs.hashSync(contrasena, 8);
  const puesto = req.body.puesto;
  const departamento = req.body.departamento;
  const correoElectronico = req.body.correoElectronico;
  const telefono = req.body.telefono;
  
  const createUser = "CALL createUser(?,?,?,?,?,?)";
  const query = mysql.format(createUser, [nombre, encryptedPwd, puesto, departamento, correoElectronico, telefono]); 
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result)
                     })
})

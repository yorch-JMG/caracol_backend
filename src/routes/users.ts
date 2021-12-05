import { Router } from "express";
import {connection} from "../connection";
import bcryptjs from 'bcryptjs';
import mysql from 'mysql';
import  jwt  from "jsonwebtoken";
import { verifyToken } from "./verifyToken";
export const router = Router();

interface IReq {
  token : string
}


router.get('/api/users', (req : IReq, res : any) => {
//  jwt.verify(req.token, 'secretkey', (error, authData) => {
//    if(error){
//      res.sendStatus(403);
//    } else {
        const getAllEmpleados = "CALL getAllEmpleados()";
        connection.query(getAllEmpleados, [], (err, result) => {
            if(err) throw err;
            console.log(result)
            res.json(result)
        })

//    }
//  })

});

router.get('/api/users/getUserById',verifyToken, (req : any, res : any) => {
  jwt.verify(req.token, 'secretkey', (error : any, authData : any)  => {
    if(error){
      res.sendStatus(403);
    } else {
        const idVisitanteElegido = req.body.idVisitante;
        connection.query("CALL getUserById(?)", [idVisitanteElegido], (err, result) => {
            if(err) throw err;
            console.log(result)
            res.json(result)
        })

    }
  })
});



router.post('/api/users/create', async (req, res) => {
  const nombre = req.body.nombre;
  const contrasena = req.body.contrasena;
  const encryptedPwd = await bcryptjs.hash(contrasena, 8);
  const puesto = req.body.puesto;
  const departamento = req.body.departamento;
  const correoElectronico = req.body.correoElectronico;
  const telefono = req.body.telefono;
  console.log(nombre)
  
  const createUser = "CALL createUser(?,?,?,?,?,?)" ;
  const query = mysql.format(createUser, [nombre, encryptedPwd, puesto, departamento, correoElectronico, telefono]); 
  console.log(query)
  
    connection.query( query,
                     (err, result) => {
                       if(err) res.json(err);
                       console.log(result);
                       res.json(result)
                      jwt.sign({user: correoElectronico}, 'secretkey', {expiresIn: '1d'}, (err : any, token : any) => {
                                res.send({
                                    token
                                })
                              });
                     });
});

router.post('/api/login', async (req, res) => {
  const correoElectronico = req.body.correoElectronico;
  const contrasena = req.body.contrasena;
  const userLogin = "CALL getEmailAndPassword(?,?)";
  const query = mysql.format(userLogin, [correoElectronico, contrasena])
  connection.query(
    query,
    (err, result) => {
      if(err) throw err;
      if(result.length > 0){
        const foundUser = result[0][0];
        const foundUserPassword = foundUser.contrasena;
        const foundUserEmail = foundUser.correoElectronico;
        try{
          if(bcryptjs.compareSync(contrasena, foundUserPassword)){
            jwt.sign({user: foundUserEmail}, 'secretkey', {expiresIn: '1d'}, (err : any, token : any) => {
              if(err) {
                console.log('error on token: ', err)
              }
              res.send({
                token
              })
            })
          }
          else{
            res.send("Contrasena incorrecta")
          }
        }
        catch(e){
          res.send("Error al intentar hacer login");
        }
      }
    }
  )
});

module.exports = router;

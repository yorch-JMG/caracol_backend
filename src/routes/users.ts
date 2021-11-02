import { Router } from "express";
import faker from 'faker';

const router = Router();

router.get('/api/users', (req, res) => {
  res.json('user list');
});

router.get('/api/users/create', async (req, res) => {
  const password : String = "123";
  for(let i = 0; i < 5; i++){
    await 
  }
})

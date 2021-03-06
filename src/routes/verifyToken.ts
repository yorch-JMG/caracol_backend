export const verifyToken = (req : any, res : any, next : any) => {
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  }else{
    res.sendStatus(403);
  }
}

import express, {Application} from "express";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import cors from 'cors';
const users = require("./routes/users");
const sales = require("./routes/sales");
export class App {
  
  private app: Application;

  constructor(private port? : number | string) {
    this.app = express();
    this.middlewares();
  }
  
  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000)
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(morgan('dev'));
    this.app.use(cors())
    this.app.use("/users", users);
    this.app.use("/sales", sales);
  }

  async listen() {
    this.app.listen(this.port);
    console.log("listening on port", this.port);
  }
}

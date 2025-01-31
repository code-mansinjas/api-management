import route from './routes'
import morgan from 'morgan'
import { config } from 'dotenv'
import express, { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import createError from 'http-errors'
config();

import './utils/database-connection'

const server = express();
const port = process.env.MAIN_PORT || 5000;

server.use(express.json())
server.use(morgan('dev'))

server.use('/health-check',(req,res)=>res.send("Server Running"))
server.use('/api', route);

server.use(function (req, res, next) {
  next(createError(404));
});


server.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.json({ error: err, message: "INTERNAL SERVER ERROR" })
  }
})
server.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

export default server
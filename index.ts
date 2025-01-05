import route from './src/routes'
import morgan from 'morgan'
import { config } from 'dotenv'
import express, { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import { sequelize } from './src/models'
config();

const server = express();
const port = process.env.MAIN_PORT || 5000;
const MODELS_SYNC = process.env.MODELS_SYNC


// Database Connection Starts
if (MODELS_SYNC == 'true') {
  sequelize.sync({})
} else {
  sequelize.authenticate()
}
// Database Connection Ends

server.use(express.json())
server.use(morgan('dev'))

server.use('/',(req,res)=> {
  return res.json({ message: "Server Running" })
})
server.use('/api', route);

server.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.json({ error: err, message: "INTERNAL SERVER ERROR" })
  }
})
server.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

export default server
import express from 'express';
import bodyParser from 'body-parser';

import { IndexRouter } from "./controllers/v0/index.router";

// main
(async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use('/api/v0/', IndexRouter);

  const port = process.env.PORT || 8082;
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
